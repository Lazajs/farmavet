import ProductModel from '@/db/models/Product.model'
import connect from '@/db/connection'
import { IProduct } from '@/interfaces/Product.interface'

interface Props {
  text?: string
  provider?: string
  type?: string
}

export default async function getProductsDB (searchParams: Props) {
  await connect()

  const text = searchParams?.text
  const type = searchParams?.type
  const provider = searchParams?.provider

  const options: Partial<IProduct> = {}
  if (text) options.ARTICULO = text
  if (type) options.TIPO = type
  if (provider) options.PROVEEDOR = provider

  const products = await ProductModel.find(options).limit(20).select({ __v: 0, _id: 0 }).lean()
  return products as IProduct[]
}
