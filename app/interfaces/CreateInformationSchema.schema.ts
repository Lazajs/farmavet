import { z } from 'zod'

export const CreateInformationSchema = z.object({
  name: z.string().max(30).min(2),
  lastname: z.string().max(30).min(2),
  country: z.string().min(2),
  province: z.string().min(2),
  city: z.string().min(2),
  address: z.string().min(2),
  apartment: z.string().min(2).optional(),
  code: z.coerce.number().min(2),
  phone: z.coerce.number().min(4),
  email: z.string().email(),
  information: z.string().max(500).optional(),
  products: z.string().array()
})
