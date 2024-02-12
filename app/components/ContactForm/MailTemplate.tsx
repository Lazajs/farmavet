import * as React from 'react'
import { Button } from '@react-email/button'
import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Container, Heading, Hr } from '@react-email/components'

interface Props {
  name: string
  email: string
  message: string
}

export function MyTemplate ({ name, email, message }: Props) {
  return (
    <Html lang="es">
      <Container style={{ border: '1px solid #687641', borderRadius: '20px', padding: '16px', width: '100%' }}>
        <Heading style={{ color: '#687641', textAlign: 'center', fontSize: '32px' }} as='h1'>Nuevo mensaje vía Farmavet</Heading>
        <Heading as='h3' style={{ fontSize: '20px', color: '#1E1E1E' }}>De: {name}</Heading>
        <Heading as='h3' style={{ fontSize: '20px', color: '#1E1E1E' }}>Desde: {email}</Heading>

        <Text style={{ fontSize: '18px', color: '#1E1E1E' }}>{message}</Text>

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
