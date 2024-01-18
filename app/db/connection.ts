import mongoose from 'mongoose'

export async function disconnect () {
  return await mongoose.disconnect()
}

export async function connect () {
  if (!process.env.NEXT_MONGO_URI) {
    return new Error('Mongoose URI not found')
  }
  const connection = await mongoose.connect(process.env.NEXT_MONGO_URI!)

  if (connection.connection.readyState === 1) {
    console.log('connected to mongodb')
    return true
  }
  return false
}
