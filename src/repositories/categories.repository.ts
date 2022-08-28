import { checkMongoConnection } from '../helpers/errorHandlers'
import categoriesModel from '../models/categories.model'

export const find = async () => {
  try {
    checkMongoConnection()
    return await categoriesModel.find()
  } catch (error) {
    console.error(error)
    throw error
  }
}
