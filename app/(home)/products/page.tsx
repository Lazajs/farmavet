import ProductModel from '@/db/models/Product.model'
import { connect, disconnect } from '@/db/connection'
import { IProduct } from '@/interfaces/Product.interface'
import Client from './page.client'

export default async function Page () {
  const connection = await connect()
  let products: IProduct[] = []
  if (connection) {
    products = await ProductModel.find({}).limit(50).select({ __v: 0, _id: 0 })
  }
  await disconnect()

  return (
    <Client products={products} />
  )
}
