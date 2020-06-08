const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true},
    catagoryId: {type: Number, required: true},
    price: {type: Number, required: true },
    status: {type: String, required: true},
    imageName: {type: String, required: true},
    descreption: {type: String, required: true},
    sellerId: {type: String, required: true},
});

module.exports = mongoose.model('product', productSchema);
