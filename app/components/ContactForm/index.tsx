import FormContent from './FormContent'

export default function ContactForm () {
  const handleAction = async () => {
    'use server'
    // fetch here
  }

  return (
    <form action={handleAction} className='flex m-auto flex-col gap-[16px] md:gap-[24px] lg:min-w-[500px]'>
      <FormContent />
      <button className='bg-primary w-[190px] h-[50px] rounded-[50px] text-xs font-medium text-textWhite block m-auto'>ENVIAR MENSAJE</button>
    </form>
  )
}
