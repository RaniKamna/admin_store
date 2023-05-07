const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');

const router = express.Router();

router.route("/product/new").post(createProduct);
router.route("/products").get(getAllProducts);

module.exports = router;