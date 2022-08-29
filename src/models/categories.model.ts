import { ObjectId } from 'mongodb'
import { model, Schema } from 'mongoose'
import { ICategory } from '../helpers/interfaces'

const categoriesSchema = new Schema<ICategory>(
  {
    _id: ObjectId,
    name: String
  },
  { collection: 'categories' }
)

export default model('categories', categoriesSchema)
