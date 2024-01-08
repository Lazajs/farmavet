import mongoose from 'mongoose'

export async function disconnect () {
  return await mongoose.disconnect()
}

export async function connect () {
  if (!process.env.NEXT_MONGO_URI) {
    return new Error('Mongoose URI not found')
  }
  await mongoose.connect(process.env.NEXT_MONGO_URI!)
  console.log('CONNECTED TO MONGODB')
}
