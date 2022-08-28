import * as getCategoriesService from '../services/categories.service'
import { NextFunction, Request, Response } from 'express'

export const get = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await getCategoriesService.getAll())
  } catch (err) {
    console.error(`Error while getting categories`, err.message)
    next(err)
  }
}
