import mongoose from 'mongoose'

interface IOrder {
  name: string,
  lastname: string
  country: string
  province: string
  city: string
  address: string
  apartment?:string
  code: number
  phone: number
  email: string
  information?: string
  products: string[],
  date: string
  status: 'Pendiente' | 'Cotizado' | 'Confirmado' | 'Enviado'
}

const orderSchema = new mongoose.Schema<IOrder>({
  name: String,
  lastname: String,
  country: String,
  province: String,
  city: String,
  address: String,
  apartment: { type: String, required: false, default: 'Sin departamento' },
  code: Number,
  phone: Number,
  email: String,
  information: { type: String, required: false, default: 'Sin información adicional' },
  products: [String],
  date: { type: String },
  status: { type: String, enum: ['Pendiente', 'Cotizado', 'Confirmado', 'Enviado'], default: 'Pendiente' }
})

export default mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema)
