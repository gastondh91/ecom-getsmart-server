import { ObjectId } from 'mongodb'
import { model, Schema } from 'mongoose'

const categoriesSchema = new Schema(
  {
    _id: ObjectId,
    name: String
  },
  { collection: 'categories' }
)

export default model('categories', categoriesSchema)
