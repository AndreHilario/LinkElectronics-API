import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"


export async function singUp(req, res) {

    const { name, email, password, state, city, road } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send("E-mail já está cadastrado!")

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password: hash, state, city, road })
        res.status(201).send("Usuário criado com sucesso!")

    } catch (err) {
        res.status(500).send(err.message)
    }

}

export async function login(req, res) {

    const { email, password } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (!user) return res.status(401).send("E-mail ainda não cadastrado!")

        const isPasswordCorrect = bcrypt.compareSync(password, user.password)
        if (!isPasswordCorrect) return res.status(401).send("Senha incorreta")

        const token = uuid()

        await db.collection("sessions").insertOne({ token, userId: user._id })
        res.send({ token, userName: user.name })


    } catch (err) {
        res.status(500).send(err.message)
    }

}

export async function logout(req, res) {

    const { token } = res.locals.session

    try {

        await db.collection("sessions").deleteOne({ token })
        res.status(200).send("Logout realizado com sucesso!")

    } catch (err) {
        res.status(500).send(err.message)
    }

}