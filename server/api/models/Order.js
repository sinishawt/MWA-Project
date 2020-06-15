

const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: { type: String, required: true},
    deliveryDate: {type: Date, required: true},
    shippedDate: {type: Date, required: true},
    buyerId : {
        type :Schema.Types.ObjectId,
        ref : 'buyer',
        required : false
    },

    sellerId: {
        type :Schema.Types.ObjectId,
        ref : 'seller',
        required : false
    },

    shippingAddressId: {
        type :Schema.Types.ObjectId,
        ref : 'Address',
        required : false
    },

    billingId: {
        type :Schema.Types.ObjectId,
        ref : 'Billing',
        required : false
    },

});


// buyerId: { type: Number, required : true},
// sellerId: { type: Number, required : true},
// shippingAddressId: { type: Number, required : true},
// billingId: { type: Number, required : false},
// shippedDate: { type: Date, required : false},

//}

module.exports = mongoose.model('order', orderSchema);

