const express = require("express");
const Product = require("../models/productModels");
const router = express.Router()
const {getProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController')

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id',deleteProduct)


module.exports = router