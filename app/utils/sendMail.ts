import { Resend } from 'resend'

interface MailInfo {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendMail (info: MailInfo): Promise<boolean> {
  // const { to, subject, text, html } = info
  // const ownDomain = process.env.NEXT_OWN_DOMAIN as string
  const resend = new Resend(process.env.NEXT_RESEND_KEY as string)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Here should be ownDomain
      to: ['farmavettt@gmail.com'],
      subject: 'Hello world',
      html: '<h1>Hello world</h1>'
    })
    console.log(data)
  } catch (e) {
    console.log(e)
    return false
  }

  return true
}
