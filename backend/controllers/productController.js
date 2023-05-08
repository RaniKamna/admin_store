const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body.productData);
    res.status(201).json({
        success: true,
        product,
    });
});

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "1800");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    })
})