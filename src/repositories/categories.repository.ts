import { ResponseError } from '../helpers/interfaces'
import categoriesModel from '../models/categories.model'

export const find = async () => {
  try {
    const categoriesResult = await categoriesModel.find()
    if (!categoriesResult.length) {
      const error: ResponseError = new Error()
      error.message = '[Categories Repository]: Registries were not'
      error.status = 400
      throw error
    }
    return categoriesResult
  } catch (err) {
    console.log(err)
    throw err
  }
}
