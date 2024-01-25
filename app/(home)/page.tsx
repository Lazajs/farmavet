import ImageCarousel from '@/components/ImageCarousel'
import Image from 'next/image'
import { dmSerif } from '@/utils/fonts'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='mb-20'>
    <header className='md:relative'>
      <ImageCarousel />
      <div className='block px-[16px] font-medium md:absolute md:left-1/4 md:top-1/3 md:-translate-y-1/3 md:-translate-x-1/4 w-fit md:w-fit max-w-[350px] mx-auto md:m-0 md:max-w-[500px]'>
        <p id='header-txt' className='text-xs text-center text-textBlack md:text-xl md:text-textWhite md:text-left'>Descubre nuestra calidad y compromiso constante como tu aliado en el cuidado de los animales</p>
        <Link href={'/products'}>
          <button className='text-textWhite block mx-auto mt-4 text-base px-[24px] py-[12px] rounded-[40px] shadow-common bg-primary md:m-0 md:mt-4 w-[200px] h-[50px] md:w-[250px] md:h-60px]'>Ver productos</button>
        </Link>
      </div>
    </header>

    <section id='services' className='text-textBlack mt-[60px] px-[16px] md:px-[120px] max-w-[1440px] m-auto'>
      <h2 className={`${dmSerif.className} text-xl2 font-normal text-center mb-[30px] md:text-super md:text-left md:mb-[100px]`}>Nuestros servicios</h2>
      <div className='text-xs w-fit grid mx-auto grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16'>
        <div className='text-center md:text-left max-w-[360px] md:max-w-[600px] flex flex-col md:flex-row md: justify-between gap-4'>
          <span>
            <h4 className='font-bold mb-4 md:text-xl whitespace-nowrap'>Envío nacional</h4>
            <p className='font-medium md:text-base max-w-[300px]'>Hacemos llegar tus pedidos a cualquier parte del país, de manera rápida y eficiente a través de Correo Argentino</p>
          </span>
          <Image src={'/argentina.svg'} alt='Argentina' width={100} height={100} className='m-auto md:w-[33%] max-w-[140px]'/>
        </div>

        <div className='text-center md:text-left max-w-[360px] md:max-w-[600px] flex flex-col md:flex-row md: justify-between gap-4'>
          <span>
            <h4 className='font-bold mb-4 md:text-xl lg:whitespace-nowrap'>Formas de Pago</h4>
            <p className='font-medium md:text-base max-w-[300px]'>Ofrecemos varias opciones para que elijas la que se adapte a tus preferencias</p>
          </span>
          <Image src={'/pay.svg'} alt='Credit card' width={100} height={100} className='m-auto md:w-[33%] max-w-[140px]'/>
        </div>

         <div className='text-center md:text-left max-w-[360px] md:max-w-[600px] flex flex-col md:flex-row md: justify-between gap-4'>
          <span>
            <h4 className='font-bold mb-4 md:text-xl whitespace-nowrap'>Asesoría Personalizada</h4>
            <p className='font-medium md:text-base max-w-[300px]'>Valoramos la relación directa con nuestros clientes, por eso ofrecemos el apoyo y la orientación que necesitas</p>
          </span>
          <Image src={'/hadn.svg'} alt='Hand' width={100} height={100} className='m-auto md:w-[33%] max-w-[140px]'/>
        </div>

        <div className='text-center md:text-left max-w-[360px] md:max-w-[600px] flex flex-col md:flex-row md: justify-between gap-4'>
          <span>
            <h4 className='font-bold mb-4 md:text-xl whitespace-nowrap'>Libretas sanitarias</h4>
            <p className='font-medium md:text-base max-w-[300px]'>Válidas tanto a nivel nacional como para viajes internacionales. Estos documentos abarcan caninos, felinos y equinos</p>
          </span>
          <Image src={'/libreta.svg'} alt='Libreta' width={100} height={100} className='m-auto md:w-[33%] max-w-[140px]'/>
        </div>
      </div>
    </section>

    <section id='contact' className='text-textBlack mt-[60px] px-[16px] md:px-[120px] max-w-[1440px] m-auto'>
      <h2 className={`${dmSerif.className} text-xl2 font-normal text-center mb-[30px] md:text-super md:text-left md:mb-[100px]`}>Contáctenos</h2>
      <div className='mx-auto block lg:flex'>
        <ContactForm />
        <Image src={'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704709849/page/cmpdog_dxq2ef.png'} width={500} height={500} alt='Dog' className='w-full max-w-[500px] lg:max-w-[500px] object-contain mx-auto mt-10 lg:mt-0'/>
      </div>
    </section>
    </main>
  )
}
