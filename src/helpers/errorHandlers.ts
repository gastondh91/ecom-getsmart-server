import mongoose from 'mongoose'

export const checkMongoConnection = () => {
  const isMongoDBConnected = mongoose.connection.readyState === 1
  if (!isMongoDBConnected) {
    const error = new Error()
    error.name = 'Internal server error'
    error.message = 'Database connection error'
    throw error
  }
}
