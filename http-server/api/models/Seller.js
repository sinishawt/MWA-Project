const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name : { type: String, required : true},
    email : { type : String, required : true },
    pwd : { type : String, required : true },
    role : { type : String , default: "Seller", required : true },
    status: {type: String, default: 'Pending',required: false},
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : false
    }],
    orders : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Order',
        required : false
    }]
});

module.exports = mongoose.model('Seller', sellerSchema);
