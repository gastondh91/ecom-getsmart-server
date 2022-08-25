import { Router } from 'express'
import Fakedata from './models/categories'
const routes = Router()

routes.get('/api', async (_req, res) => {
  const categories = await Fakedata.find()
  const sortedCategories = categories.sort(a => {
    if (a.name === 'like new') return 1
    return -1
  })
  res.json(sortedCategories)
})

export default routes
