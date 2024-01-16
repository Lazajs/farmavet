import mongoose from 'mongoose'
import { IType } from '@/interfaces/Product.interface'

const typeSchema = new mongoose.Schema<{name: IType}>({
  name: { type: String, required: true }
})

export default mongoose.models.Type || mongoose.model<IType>('Type', typeSchema)
