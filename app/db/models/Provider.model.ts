import mongoose from 'mongoose'
import { IProvider } from '@/interfaces/Product.interface'

const providerSchema = new mongoose.Schema<{name: IProvider}>({
  name: { type: String, required: true }
})

export default mongoose.models?.Provider || mongoose.model<IProvider>('Provider', providerSchema)
