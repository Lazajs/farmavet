import type { Metadata } from 'next'
import '@/globals.css'
import { montserrat } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'Farmavet | Farmacia veterinaria online.',
  description: 'Descubre nuestra calidad y compromiso constante como tu aliado en el cuidado de los animales',
  icons: {
    icon: '/icon.ico'
  }
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' antialiased'}>
        {/* {children} */}
        <h1>Nothing here.</h1>
      </body>
    </html>
  )
}
