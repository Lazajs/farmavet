import { sendMail } from '../utils/sendMail'

export async function OrderForm ({ children }: {children: React.ReactNode}) {
  async function handleSubmit (formData: FormData) {
    'use server'

    const result = await sendMail({
      to: formData.get('email') as string,
      subject: 'Order',
      text: `Your order is ${formData.get('name')}`,
      html: `<p>Your order is ${formData.get('name')}</p>`
    })

    if (result) console.log('Nice! Email sent')
  }

  return (
    <form action={handleSubmit}>
      {children}
    </form>
  )
}
