'use server'
import { Resend } from 'resend'
import { CreateContactSchema } from '@/interfaces/CreateContactSchema.schema'
import { render } from '@react-email/render'
import MyTemplate from './MailTemplate'

export async function sendContactMail (state: unknown, formData: FormData) {
  const fromContactForm = {
    email: formData.get('email'),
    message: formData.get('message'),
    name: formData.get('name')
  }
  // const ownDomain = process.env.NEXT_OWN_DOMAIN as string
  const ownDomain = '<onboarding@resend.dev>'
  const resend = new Resend(process.env.NEXT_RESEND_KEY as string)

  const result = CreateContactSchema.safeParse(fromContactForm)

  if (!result.success) {
    return result.error.format()
  }

  try {
    const html = render(<MyTemplate name={fromContactForm.name as string} email={fromContactForm.email as string} message={fromContactForm.message as string} />, {
      pretty: true
    })

    const data = await resend.emails.send({
      from: `${fromContactForm.name} ${ownDomain}`,
      to: ['farmavettt@gmail.com'],
      subject: `Mensaje de ${fromContactForm.email}`,
      html
    })

    if (!data.error) return ['']
    else throw new Error('_error')
  } catch (e) {
    return ['_error']
  }
}
