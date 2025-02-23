const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');

// API Routes
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;
