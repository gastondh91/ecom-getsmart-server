import 'dotenv/config'
import express from 'express'

import routes from './routes'
import mongoose from 'mongoose'
import {
  clientDefaultPath,
  GET_SMART_DATABASE,
  MONGO_DATABASE_CONECTION_URL
} from './utils'
import path from 'path'
const cors = require('cors')

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    MONGO_DATABASE_CONECTION_URL,
    { dbName: GET_SMART_DATABASE },
    () => console.log(' Mongoose is connected')
  )
} catch (e) {
  console.log('could not connect')
}

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Connection error ${err}`))
dbConnection.once('open', () => console.log('Connected to DB!'))

class App {
  public server

  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(express.static(path.join(__dirname, clientDefaultPath)))
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server