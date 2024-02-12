'use client'
import useCart from '@/hooks/useCart'
import { dmSerif } from '@/utils/fonts'
import { useFormStatus } from 'react-dom'

export default function YourOrder () {
  const { cart } = useCart()
  const { pending } = useFormStatus()

  return (
      <div className='xl:absolute xl:right-[70px] xl2:right-[120px] xl:top-[140px]'>
        <h2 className={`${dmSerif.className} text-textBlack text-center m-4 text-xl2 font-normal`}>Tu pedido</h2>
        <div className='bg-softWhite py-[10px] px-[30px] md:min-h-[180px] h-fit block m-auto rounded-[15px] min-w-[200px] max-w-[400px] xl2:max-w-none w-fit'>
          <span className='text-textBlack md:text-sm mt-[12px] font-bold text-small flex gap-1 flex-col justify-between'>
            {
              cart?.map(item => (
                <div key={item.CODIGO} className='flex gap-4'>
                  <p className='whitespace-nowrap'> x {item.quantity}</p>
                  <p>{item.ARTICULO}</p>
                </div>
              ))
            }
          </span>
          <button disabled={pending} className='w-[200px] disabled:opacity-75 md:w-[350px] block mt-[30px] shadow-common m-auto py-[15px] px-[30px] text-white bg-primary whitespace-nowrap rounded-[50px] text-sm font-medium'>
            {
              pending ? 'Procesando...' : 'Pedir cotización'
            }
          </button>
        </div>
      </div>
  )
}
