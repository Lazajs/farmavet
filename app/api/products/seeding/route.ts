import { NextRequest, NextResponse } from 'next/server'
import ProductModel from '@/db/models/Product.model'
import TypeModel from '@/db/models/Type.model'
import ProviderModel from '@/db/models/Provider.model'
import connect from '@/db/connection'
import { IProduct } from '@/interfaces/Product.interface'

export async function PUT (req: NextRequest) {
  await connect()

  const data = await req.json()

  const types = Array.from(new Set(data.map((product: IProduct) => product.TIPO))).map(type => ({ name: type }))
  const providers = Array.from(new Set(data.map((product: IProduct) => product.PROVEEDOR))).map(provider => ({ name: provider }))

  await ProductModel.insertMany(data)
  await TypeModel.insertMany(types)
  await ProviderModel.insertMany(providers)

  return NextResponse.json({ status: 'ok' })
}
