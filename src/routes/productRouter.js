const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.list)
router.get('/:id', productController.detail)
router.get('/create', productController.add)
router.post('/create', productController.create)
router.get('/edit/:id', productController.edit)
router.put('/edit/:id', productController.update)
router.delete('/delete/:id', productController.delete)
router.get('/search', productController.search)

module.exports = router;