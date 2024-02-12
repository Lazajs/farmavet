'use client'

import Input from './Input'
import Select from './Select'
import { ALL_DATA } from '../data'
import { useEffect, useState } from 'react'
import YourOrder from './YourOrder'
import useCart from '@/hooks/useCart'

export default function FormaData ({ errors } : {errors: string[]}) {
  const [country, setCountry] = useState<string>('Argentina')
  const [selectedProvince, setSelectedProvince] = useState<string>(() => ALL_DATA[country][0])
  const { cart } = useCart()

  const hasError = (name: string) => errors.includes(name)

  useEffect(() => {
    setSelectedProvince(ALL_DATA[country][0])
  }, [country])

  return (
    <>
      <div className='flex gap-[16px] mb-[16px]'>
        <span className='w-full'>
          <label htmlFor="name" className='font-bold'>Nombre *</label>
          <Input name='name' id='name' error={hasError('name')} />
        </span>
        <span className='w-full'>
          <label htmlFor="lastname" className='font-bold'>Apellido *</label>
          <Input name='lastname' id='lastname' error={hasError('lastname')} />
        </span>
      </div>

      {
        cart?.map((product) => {
          return <input className='hidden' readOnly name='product' key={product.CODIGO} value={JSON.stringify(product)} />
        })
      }

      <Select label='País / Región' name='country' onChange={(e: any) => { setCountry(e.target.value) }} options={['Argentina', 'Paraguay', 'Uruguay', 'Chile', 'Brasil', 'Bolivia']} />
      <Select label='Región / Provincia' name='province' onChange={(e: any) => setSelectedProvince(e.target.value)} options={ALL_DATA[country] as string[]}/>

      <input readOnly name='country' id='country' value={country} className='hidden' />
      <input readOnly name='province' id='province' value={selectedProvince} className='hidden' />

      <span className='mb-[16px]'>
        <label htmlFor="city" className='font-bold'>Localidad / Ciudad *</label>
        <Input name='city' id='city' error={hasError('city')} />
      </span>

      <div className='mb-[16px] flex flex-col'>
          <span className='mb-[16px]'>
            <label htmlFor="address" className='font-bold'>Dirección de la calle *</label>
            <Input name='address' placeholder='Número de la casa y nombre de la calle' id='address' error={hasError('address')} />
          </span>
          <Input name='apartment' id='apartment' placeholder='Apartamento, habitación, unidad, etc.' error={hasError('apartment')} />
      </div>

      <span className='mb-[16px]'>
        <label htmlFor="code" className='font-bold'>Código postal</label>
        <Input name='code' id='code' error={hasError('code')} />
      </span>
      <span className='mb-[16px]'>
        <label htmlFor="phone" className='font-bold'>Teléfono</label>
        <Input name='phone' id='phone' error={hasError('phone')} />
      </span>
      <span className='mb-[16px]'>
        <label htmlFor="email" className='font-bold'>Correo electrónico</label>
        <Input name='email' id='email' error={hasError('email')} />
      </span>

      <h2 className='font-medium text-g mt-[32px] mb-[10px]'>Información adicional</h2>
      <label htmlFor="information" className='font-bold text-sm'>Notas del pedido (opcional)</label>
      <textarea name="information" id='information' placeholder='Notas sobre tu pedido, por ejemplo, notas especiales para la entrega. ' className='resize-none w-full p-2 rounded-[10px] bg-softWhite h-[140px]'></textarea>

      <YourOrder />
    </>
  )
}
