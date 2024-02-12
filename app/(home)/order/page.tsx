import { dmSerif } from '@/utils/fonts'
import { OrderForm } from './components/OrderForm'
import Link from 'next/link'

const Arrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#545454" d="M16.0613 21.546a1.5001 1.5001 0 0 0 0-2.121L8.6363 12l7.425-7.425a1.5002 1.5002 0 0 0-.0183-2.1027 1.5 1.5 0 0 0-2.1027-.0183l-8.4855 8.4855a1.5 1.5 0 0 0 0 2.121l8.4855 8.4855a1.5001 1.5001 0 0 0 2.121 0Z"/></svg>)

export default async function Page () {
  return (
    <main className="min-h-screen max-w-[1440px] m-auto p-[16px]">
      <h1 className={`${dmSerif.className} text-textBlack md:text-left md:text-xl3 md:font-normal text-center text-xl2 pb-[20px] font-normal`}>Detalles de facturación</h1>
      <OrderForm />

      <Link href={'/products'}>
        <span className='flex my-10 mx-4'>
          <Arrow/>
            <p className='text-textGray font-bold text-xs'>Volver a la tienda</p>
        </span>
      </Link>
    </main>
  )
}
