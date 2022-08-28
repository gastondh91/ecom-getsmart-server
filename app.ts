import 'dotenv/config'
import mongoose from 'mongoose'
import { dbConnectionString, DB_NAME } from './src/config/db.config'
import { createExpressAndGraphQLServer } from './src/config/server.config'
import typeDefs from './src/graphql/typeDefs'
import resolvers from './src/graphql/resolvers'

try {
  // Connect to the MongoDB cluster
  mongoose.connect(dbConnectionString, { dbName: DB_NAME }, () =>
    console.log(' Mongoose is connected')
  )
} catch (e) {
  console.error('could not connect')
}

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.error(`Connection error ${err}`))
dbConnection.once('open', () => console.log('Connected to DB!'))

createExpressAndGraphQLServer(typeDefs, resolvers)
