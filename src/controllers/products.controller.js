import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getProducts(req, res) {

    try {
        const allProducts = await db.collection("products").find().toArray();
        res.send(allProducts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function getProductById(req, res) {

    const { id } = req.params;

    try {
        const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
        if (!product) return res.status(404).send("Product doesn't exist");

        res.send(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};