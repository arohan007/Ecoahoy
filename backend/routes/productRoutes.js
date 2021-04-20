import express from 'express'
import {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()
//@desc Fetch all products
//@route GET /api/products
//@access Public
router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)


//@desc Fetch single product
//@route GET /api/products/:id
//@access Public


export default router 