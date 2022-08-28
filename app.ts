import 'dotenv/config'
import path from 'path'
import express from 'express'
import mongoose from 'mongoose'

import routes from './src/routes/categories'
import { host, port, clientBuildPath } from './src/config/general.config'
import { dbConnectionString } from './src/config/db.config'
const cors = require('cors')

try {
  // Connect to the MongoDB cluster
  mongoose.connect(dbConnectionString, () =>
    console.log(' Mongoose is connected')
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
    this.server.use(express.static(path.join(__dirname, clientBuildPath)))
  }

  routes() {
    this.server.use(routes)
  }
}

console.log(`Server is running at ${host}`)

new App().server.listen(port)
