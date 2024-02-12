import { z } from 'zod'

export const CreateContactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(2).max(1000)
})
