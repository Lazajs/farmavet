import { NextRequest, NextResponse } from 'next/server'
import ProductModel from '@/app/db/models/Product.model'
import { connect, disconnect } from '@/app/db/connection'

export async function PUT (req: NextRequest) {
  await connect()

  const data = await req.json()
  // const batchSize = 100 // Adjust the batch size as needed
  // const chunks = []

  // while (data.length > 0) {
  //   chunks.push(data.splice(0, batchSize))
  // }

  // for (const chunk of chunks) {
  //   await ProductModel.insertMany(chunk)
  //   console.log(chunk)
  // }

  await ProductModel.insertMany(data)
  await disconnect()
  console.log('exit')
  // return NextResponse.json(result)
  return NextResponse.json({ error: ';asdf' })
}
