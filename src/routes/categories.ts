import { Router } from 'express'
import * as getCategoriesController from '../controllers/categories.controller'
const router = Router()

router.get('/categories', getCategoriesController.get)
