import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'
import express from 'express'
import http from 'http'
import path from 'path'
import { clientBuildPath, host, port } from './general.config'
const cors = require('cors')
import { DocumentNode } from 'graphql'

export const createExpressAndGraphQLServer = async (
  typeDefs: DocumentNode,
  resolvers: any
) => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.static(path.join(__dirname, clientBuildPath)))

  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  })
  await server.start()
  server.applyMiddleware({ app, cors: { credentials: false, origin: '*' } })
  await new Promise<void>(resolve => httpServer.listen({ port }, resolve))
  console.log(`🚀 Server ready at ${host}`)
  console.log(`🚀 GraphQL Server ready at ${host}${server.graphqlPath}`)
}
