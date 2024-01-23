import mongoose from 'mongoose'

const MONGODB_URI = process.env.NEXT_MONGO_URI

if (!MONGODB_URI) throw new Error('MONGODB_URI not defined')

// @ts-ignore
let cached = global.mongoose

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }
    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose
      })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
