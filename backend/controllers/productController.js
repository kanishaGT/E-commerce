const ProductModel = require('../models/productModel')

//get products API -/api/v1/product
exports.getProducts= async (req, res, next) => {

    const products = await ProductModel.find({})
    res.json({
        success: true,
        products
    })
}

//get single product API -/api/v1/product/:id
exports.getSingleProducts= async (req, res, next) => {

    console.log(req.params.id, 'ID')
   
try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
}