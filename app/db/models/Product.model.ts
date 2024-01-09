import mongoose from 'mongoose'
import { IProduct } from '@/interfaces/Product.interface'

const productSchema = new mongoose.Schema<IProduct>({
  PRECIO: { type: Number, required: true },
  ARTICULO: { type: String, required: true },
  CODIGO: { type: String, required: true },
  PROVEEDOR: { type: String, required: true },
  TIPO: { type: String, required: true }
})

export default mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema)
