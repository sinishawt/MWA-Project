const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: { type: String, required: true},
    deliveryDate: {type: Date, required: true}

});

module.exports = mongoose.model('order', orderSchema);
