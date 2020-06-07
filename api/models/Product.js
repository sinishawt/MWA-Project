const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    catagoryId: Number,
    price: Number,
    status: String,
    imageName: String,
    descreption: String,
    sellerId: String
});

module.exports = mongoose.model('product', productSchema);
