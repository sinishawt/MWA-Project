const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const buyerSchema = mongoose.Schema({
    // _id: { type : Number , required : true},
    // Name : { type: String, required : true},
    // Email : { type : String, required : true },
    // PWD : { type : String, required : true },
    // Role : { type : String , default: "Buyer", required : true },
    _id: {type: Schema.Types.ObjectId, required: true},

    follows : [{
        type : Schema.Types.ObjectId,
        ref : 'Follow',
        required : false
    }],
    cart : [{
        type :Schema.Types.ObjectId,
        ref : 'ShoppingCart',
        required : false
    }],
    orders : [{
        type : Schema.Types.ObjectId,
        ref : 'Order',
        required : false
    }],
    gainedPoints : [{
        type : Schema.Types.ObjectId,
        ref : 'GainPoints',
        required : false
    }],
    billings : [{
        type : Schema.Types.ObjectId,
        ref : 'Billing',
        required : false
    }]

});
module.exports = mongoose.model('Buyer', buyerSchema);