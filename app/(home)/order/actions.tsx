'use server'
import { CreateInformationSchema } from '@/interfaces/CreateInformationSchema.schema'
import OrderModel from '@/db/models/Order.model'
import dbConnect from '@/db/connection'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import MyTemplate from './components/MailTemplate'

async function sendRequestMail (data: any) {
  const {
    name,
    lastname,
    country,
    province,
    city,
    address,
    apartment,
    code,
    phone,
    email,
    information,
    products,
    date,
    _id
  } = data

  const ownDomain = '<onboarding@resend.dev>'
  const resend = new Resend(process.env.NEXT_RESEND_KEY as string)

  try {
    const html = render(
    <MyTemplate name={name}
      lastname={lastname}
      country={country}
      province={province}
      city={city}
      address={address}
      apartment={apartment}
      code={code}
      phone={phone}
      email={email}
      information={information}
      products={products}
      date={date}
      />,
    {
      pretty: true
    })

    const data = await resend.emails.send({
      from: `Orden nro. ${_id} ${ownDomain}`,
      to: ['gordonsitofreeman@gmail.com'],
      subject: `Nueva orden de ${name} ${lastname}`,
      html
    })
    console.log(data)
    if (!data.error) return ['']
    else throw new Error('_error')
  } catch (e) {
    console.log(e)
    return ['_error']
  }
}

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

    await sendRequestMail(newOrder)

    const {
      _id
    } = newOrder
    redirect(`/order/${_id}`)
  }
  if (result.error) {
    return result.error.format()
  }
}
