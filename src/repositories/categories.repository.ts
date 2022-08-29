import { ICategory } from '../helpers/interfaces'
import { checkMongoConnection } from '../helpers/errorHandlers'
import categoriesModel from '../models/categories.model'

export const find = async (): Promise<ICategory[]> => {
  try {
    checkMongoConnection()
    const categoriesResult: ICategory[] = await categoriesModel.find()
    return categoriesResult.sort((_a, b) => (b.name === 'new' ? -1 : 1))
  } catch (error) {
    console.error(error)
    throw error
  }
}
