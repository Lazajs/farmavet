import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carrito de compras | Farmavet'
}

export default function Layout ({ children }: {children: React.ReactNode}) {
  return (
    <div className="w-full block min-h-screen py-[20px] bg-softWhite">
      {children}
    </div>
  )
}
