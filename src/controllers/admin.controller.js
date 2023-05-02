import { db } from '../database/database.connection.js'

export async function loginAdmin(req, res) {
  const user = res.locals.session

  res.send(user)
}

export async function createNewProduct(req, res) {
  const { name, brand, color, description, urlImage, model, price, amount } =
    req.body
  try {
    await db.collection('products').insertOne({
      name,
      brand,
      color,
      description,
      urlImage,
      model,
      price,
      amount
    })
    res.status(201).send('Produto criado com sucesso')
  } catch (err) {
    res.status(500).send(err.message)
  }
}
