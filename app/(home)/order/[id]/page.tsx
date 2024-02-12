import OrderModel from '@/db/models/Order.model'
import dbConnect from '@/db/connection'
import { dmSerif } from '@/utils/fonts'
import { IOrder } from '@/interfaces/Order.interface'
import Link from 'next/link'

export const metadata = {
  title: 'Detalle de la orden | Farmavet'
}

const Arrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#545454" d="M16.0613 21.546a1.5001 1.5001 0 0 0 0-2.121L8.6363 12l7.425-7.425a1.5002 1.5002 0 0 0-.0183-2.1027 1.5 1.5 0 0 0-2.1027-.0183l-8.4855 8.4855a1.5 1.5 0 0 0 0 2.121l8.4855 8.4855a1.5001 1.5001 0 0 0 2.121 0Z"/></svg>)

export default async function Page ({ params }: {params: {id: string}}) {
  const { id } = params
  await dbConnect()
  // @ts-expect-error
  const { date, status, products } = await OrderModel.findById(id).lean()

  const actualDate = new Date(date)
  const formattedDate = actualDate.toLocaleDateString('es-ES', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })

  const parsedProducts = products.map((product: string) => JSON.parse(product))

  return (
    <main className='block m-auto max-w-[1440px] min-h-screen p-[16px] lg:px-[120px]'>
      <h2 className='text-center text-primary font-medium text-base md:text-g md:text-left'>Gracias. Tu pedido ha sido recibido.</h2>
      <div className='bg-softWhite flex w-fit lg:w-full lg:items-center lg:h-[140px] m-auto my-8 gap-[16px] p-[16px] h-[80px] rounded-[15px]'>
        <span className='border-dashed border-r-[2px] border-r-gray-400 pr-2 lg:pr-4'>
          <p>Número del pedido</p>
          <b>{id}</b>
        </span>
        <span className='border-none md:border-dashed md:border-r-[2px] md:border-r-gray-400 md:pr-2 lg:pr-4 '>
          <p>Estado</p>
          <b>{status}</b>
        </span>
        <span className='hidden md:inline-block'>
          <p>Fecha</p>
          <b>{formattedDate}</b>
        </span>
      </div>
      <h1 className={`${dmSerif.className} text-xl2 font-normal text-center md:text-xl3 md:text-left`}>Detalles del pedido</h1>
      <div className='flex flex-col gap-[5px] mt-[16px]'>
        {
          parsedProducts.map((product: IOrder) => {
            return (
              <p key={product.CODIGO} className='text-small font-bold text-primary md:text-sm'>{product.ARTICULO} <small className='text-small font-bold text-textBlack md:text-sm'> x {product.quantity}</small></p>
            )
          })
        }
      </div>
      <Link href={'/products'}>
        <span className='flex my-10 mx-4'>
          <Arrow/>
          <p className='text-textGray font-bold text-xs'>Volver al inicio</p>
        </span>
      </Link>
    </main>
  )
}
