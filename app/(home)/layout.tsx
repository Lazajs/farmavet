import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '../components/Navbar'
import { montserrat } from '../utils/fonts'
import Footer from '@/components/Footer'
import SearchServer from '@/components/Search/Search'
import Filters from '@/components/Filters'
import dynamic from 'next/dynamic'
import { GoogleAnalytics } from '@next/third-parties/google'

const CartProvider = dynamic(() => import('./cart/components/CartProvider'), { ssr: false })

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
        <Navbar Mobile={<Filters />} Desktop={<SearchServer />} />
          <CartProvider>
            {children}
          </CartProvider>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-ZD1JR28DLN' />
    </html>
  )
}
