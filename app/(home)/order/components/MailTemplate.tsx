import * as React from 'react'
import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Heading, Container, Hr } from '@react-email/components'
import { Button } from '@react-email/button'

interface IOrder {
  name: string,
  lastname: string
  country: string
  province: string
  city: string
  address: string
  apartment?:string
  code: number
  phone: number
  email: string
  information?: string
  products: string[],
  date: string
}

export function MyTemplate ({ name, lastname, country, province, city, address, apartment, code, phone, email, information, products, date }: IOrder) {
  const productsParsed = products.map((product: any) => JSON.parse(product))
  return (
    <Html lang="es">
      <Container style={{ border: '1px solid #687641', borderRadius: '20px', padding: '16px', width: '100%' }}>

        <Heading as='h1' style={{ color: '#687641', fontSize: '32px', textAlign: 'center' }}>Nuevo pedido de cotización</Heading>
        <Text style={{ color: '#000000', fontSize: '20px' }}>Datos sobre la orden</ Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}> Fecha de emisión: <b>{new Date(date).toLocaleDateString('es-ES', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</b></ Text>
        <Text style={{ color: '#000000', fontSize: '20px' }}>Información personal</ Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Nombre: <b>{name}</b> <b>{lastname}</b> <br /></ Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Localidad: <b>{country}</b>, <b>{province}</b>, <b>{city}</b> <br /></Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Dirección: <b>{address}</b>, <b>{apartment}</b> <br /></Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Código postal: <b>{code}</b> <br /></Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Teléfono: <b>{phone}</b> <br /></Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>Email: <b>{email}</b> <br /></Text>
        <Text style={{ color: '#000000', fontSize: '16px' }}>{information}</Text>
        <Text style={{ color: '#000000', fontSize: '22px', marginTop: '10px' }}>Productos</ Text>
          {
            productsParsed.map((product: any) => (
              <Text key={product.CODIGO} style={{ fontWeight: '500', fontSize: '18px', color: '#000' }}>
                Artículo: {product.ARTICULO} <br />
                Proveedor: {product.PROVEEDOR} <br />
                Cantidad: {product.quantity}
              </Text>
            ))
          }

          <Hr />
          <Text style={{ fontSize: '18px', color: '#1E1E1E' }}>
          Evita responder directamente desde gmail, en cambio:
          <Button style={{ fontSize: '18px', color: '#F3F4EC', background: '#687641', border: '#0000 1px solid', borderRadius: '15px', padding: '10px', margin: '10px auto', display: 'block', textDecoration: 'none' }} href={`mailto:${email}`}>Click aquí</Button>
        </Text>
      </Container>
    </Html>
  )
}

export default MyTemplate
