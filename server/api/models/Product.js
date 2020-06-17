










const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true},
    catagoryId: {type: Number, required: true},
    price: {type: Number, required: true },
    status: {type: String, default: 'Available', required: false},
    imageName: {type: String, required: true},
    descreption: {type: String, required: true},
    sellerId: {type: mongoose.Schema.Types.ObjectId, required: true},
});

module.exports = mongoose.model('product', productSchema);
