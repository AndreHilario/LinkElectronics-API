import { ObjectId } from 'mongodb'
import { db } from '../database/database.connection.js'
import dayjs from 'dayjs'

export async function getProducts(req, res) {
  try {
    const allProducts = await db.collection('products').find().toArray()
    res.send(allProducts)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function getProductById(req, res) {
  const { id } = req.params
  if (!id) return res.sendStatus(404)

  try {
    const product = await db
      .collection('products')
      .findOne({ _id: new ObjectId(id) })
    if (!product) return res.status(404).send('Produto não existe')

    res.send(product)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function postProductDetails(req, res) {
  const { id } = req.params
  if (!id) return res.sendStatus(404)

  try {
    const now = dayjs().format('HH:mm:ss')
    const today = dayjs().format('DD/MM/YYYY')

    await db.collection('shopping').insertOne({ ...req.body, now, today })
    res.status(201).send('Item salvo com sucesso')
  } catch (err) {
    res.status(500).send(err.message)
  }
}
