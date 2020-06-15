

const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: { type: String, required: true},
    deliveryDate: {type: Date, required: true},
    buyerId: { type: Number, required : true},
    sellerId: { type: Number, required : true},
    shippingAddressId: { type: Number, required : true},
    billingId: { type: Number, required : false},
    shippedDate: { type: Date, required : false},

});

module.exports = mongoose.model('order', orderSchema);

