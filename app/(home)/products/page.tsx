import ProductModel from '@/db/models/Product.model'
import { connect, disconnect } from '@/db/connection'
import { IProduct } from '@/interfaces/Product.interface'
import Product from '@/components/Product'
import { dmSerif } from '@/utils/fonts'

export default async function Page () {
  await connect()
  const products = await ProductModel.find({}).limit(20)
  await disconnect()
  // const products = [
  //   {
  //     _id: 'asdf',
  //     PRECIO: 70397.561416,
  //     ARTICULO: 'DERRIBANTE SM ACA X 5 LTS.',
  //     CODIGO: '0102001478',
  //     PROVEEDOR: 'ACA',
  //     TIPO: 'GA Garrapaticidas',
  //     __v: 0
  //   },
  //   {
  //     _id: 'dfghb',
  //     PRECIO: 13972.924763999998,
  //     ARTICULO: 'APTO X 160 COMPRIMIDOS',
  //     CODIGO: '0101001231',
  //     PROVEEDOR: 'AFFORD',
  //     TIPO: 'PA Antiparasit. Internos',
  //     __v: 0
  //   }
  // ]

  return (
    <main className="max-w-[1440px] m-auto mt-10 p-4 lg:p-[120px] pt-0 lg:pt-0">
      <h1 className={`${dmSerif.className} text-xl2 font-normal text-textBlack mb-10 text-center md:text-left md:text-xl3`}>Productos</h1>
      <section className='flex flex-col md:flex-row md:flex-wrap md:gap-[22px] gap-2 w-full items-center'>
        {
          products.map((product: IProduct) => {
            return <Product _id={product._id} key={product.CODIGO} CODIGO={product.CODIGO} ARTICULO={product.ARTICULO} PRECIO={product.PRECIO} PROVEEDOR={product.PROVEEDOR} TIPO={product.TIPO}/>
          })
        }
      </section>
    </main>
  )
}
