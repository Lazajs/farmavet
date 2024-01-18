import { NextResponse, NextRequest } from 'next/server'
import { connect, disconnect } from '@/db/connection'
import ProductModel from '@/db/models/Product.model'
import { IProduct } from '@/interfaces/Product.interface'

export async function GET (req: NextRequest) {
  const offset = req.nextUrl.searchParams.get('offset') as string
  console.log(offset)
  const connection = await connect()
  let products: IProduct[] = []
  if (connection) products = await ProductModel.find({}).skip(+offset || 0).limit(20).select({ __v: 0, _id: 0 })
  await disconnect()
  console.log('here')
  return NextResponse.json(products)
}
