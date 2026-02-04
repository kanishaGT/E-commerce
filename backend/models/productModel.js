//Mongoose (tool to talk to MongoDB using “models”)
const mongoose = require ('mongoose');

const productSchema=new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    catogory: String,
    seller: String,
    stock: String, 
    numOfReviews: String,
    createdAt: Date
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;