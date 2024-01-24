import { NextResponse, NextRequest } from 'next/server'
import connect from '@/db/connection'
import ProductModel from '@/db/models/Product.model'

interface CustomProductT {
  ARTICULO: RegExp
  TIPO: string
  PROVEEDOR: string
}

export async function GET (req: NextRequest) {
  const offset = req.nextUrl.searchParams.get('offset') as string
  const text = req.nextUrl.searchParams.get('text') as string
  const type = req.nextUrl.searchParams.get('type') as string
  const provider = req.nextUrl.searchParams.get('provider') as string
  const options: Partial<CustomProductT> = {}

  if (text) options.ARTICULO = new RegExp(text, 'i')
  if (type) options.TIPO = type
  if (provider) options.PROVEEDOR = provider
  await connect()
  const products = await ProductModel.find(options).skip(+offset || 0).limit(20).select({ __v: 0, _id: 0 }).lean()
  return NextResponse.json(products)
}
