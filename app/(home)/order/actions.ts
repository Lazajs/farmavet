'use server'
import { CreateInformationSchema } from '@/interfaces/CreateInformationSchema.schema'
import OrderModel from '@/db/models/Order.model'
import dbConnect from '@/db/connection'
import { redirect } from 'next/navigation'

export async function requestPricing (state: unknown, formData: FormData) {
  const dataFromForm = {
    name: formData.get('name'),
    lastname: formData.get('lastname'),
    country: formData.get('country'),
    province: formData.get('province'),
    city: formData.get('city'),
    address: formData.get('address'),
    apartment: formData.get('apartment'),
    code: formData.get('code'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    information: formData.get('information'),
    products: formData.getAll('product')
  }

  const result = CreateInformationSchema.safeParse(dataFromForm)

  if (result.success) {
    // return result.data
    await dbConnect()
    const newOrder = await new OrderModel({
      ...result.data,
      date: new Date().toISOString(),
      status: 'Pendiente'
    }).save()

    const {
      _id
    } = newOrder

    redirect(`/order/${_id}`)
  }
  if (result.error) {
    return result.error.format()
  }
}
