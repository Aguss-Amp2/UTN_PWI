import express from 'express'
import { createProductController, getAllProductsController, productsIDController } from '../controlers/products.controller.js'


const products_router = express.Router()

products_router.get('/', getAllProductsController)
products_router.get('/:product_id', productsIDController)
products_router.post('/', createProductController)
products_router.delete('/:product_id',)


export default products_router