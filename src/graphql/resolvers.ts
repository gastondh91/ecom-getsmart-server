import * as categoriesRepository from '../repositories/categories.repository'

const categories = async () => {
  try {
    return await categoriesRepository.find()
  } catch (error) {
    console.log(error)
    throw error
  }
}

const resolvers = {
  Query: {
    categories
  }
}

export default resolvers
