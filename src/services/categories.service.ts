import * as categoriesRepository from '../repositories/categories.repository'

export const getAll = async () => {
  const allCategories = await categoriesRepository.find()
  return allCategories.sort(a => {
    if (a.name === 'like new') return 1
    return -1
  })
}
