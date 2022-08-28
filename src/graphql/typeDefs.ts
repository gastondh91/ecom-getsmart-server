import { gql } from 'apollo-server-express'

export default gql`
  type Category {
    _id: String
    name: String
  }

  type Query {
    categories: [Category]!
  }
`
