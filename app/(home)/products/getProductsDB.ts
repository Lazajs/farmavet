import ProductModel from '@/db/models/Product.model'
import connect from '@/db/connection'

export default async function getProductsDB () {
  await connect()
  const products = await ProductModel.find({}).limit(50).select({ __v: 0, _id: 0 })
  return products
}
