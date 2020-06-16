

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const orderSchema = mongoose.Schema({

   // _id: mongoose.Schema.Types.ObjectId,

    status: { type: String, required: true},

    orderDate: {type: Date, required: false},

    deliveryDate: {type: Date, required: false},

    shippedDate: {type: Date, required: false},

    buyerId : {
        type :Schema.Types.ObjectId,

        ref : 'Buyer',
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
    }

});


// buyerId: { type: Number, required : true},
// sellerId: { type: Number, required : true},
// shippingAddressId: { type: Number, required : true},
// billingId: { type: Number, required : false},
// shippedDate: { type: Date, required : false},

//}

module.exports = mongoose.model('order', orderSchema);

