'use server'
import { Resend } from 'resend'
import { CreateContactSchema } from '@/interfaces/CreateContactSchema.schema'

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
    const data = await resend.emails.send({
      from: `${fromContactForm.name} ${ownDomain}`,
      to: ['farmavettt@gmail.com'],
      subject: `Mensaje de ${fromContactForm.email}`,
      html: `
        <div>
          <p style='font-size: 16px;'>${fromContactForm.message}</p>


          <p style='font-size: 20px;'>Evita responder directamente desde gmail, en cambio: <a style='font-weight: bold;' href='mailto:${fromContactForm.email}'>CLICK AQUÍ</a> para responder a ${fromContactForm.name}</p>
        </div>
      `
    })

    if (!data.error) return ['']
    else throw new Error('_error')
  } catch (e) {
    return ['_error']
  }
}
