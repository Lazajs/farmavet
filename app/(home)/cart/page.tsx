import Order from './components/Order'
import { dmSerif } from '@/utils/fonts'

export default async function Page () {
  return (
    <main className="m-auto max-w-[1440px] md:px-[16px] min-h-screen">
      <h1 className={`${dmSerif.className} text-textBlack md:text-left md:text-xl3 md:font-normal text-center text-xl2 pb-[20px] font-normal`}>Pedido</h1>
      <Order />
    </main>
  )
}
