import { NextResponse, NextRequest } from 'next/server'
import connect from '@/db/connection'
import ProductModel from '@/db/models/Product.model'

export async function GET (req: NextRequest) {
  const offset = req.nextUrl.searchParams.get('offset') as string
  await connect()
  const products = await ProductModel.find({}).skip(+offset || 0).limit(20).select({ __v: 0, _id: 0 })
  return NextResponse.json(products)
}
