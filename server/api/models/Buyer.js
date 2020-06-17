const mongoose = require('mongoose');
const Product = require('../models/Product');

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

    cart:{
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }],
        totalQty: Number,
        totalPrice: Number
    },
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

    //gainedPoints :{type: Number, required: true},


    billings : [{
        type : Schema.Types.ObjectId,
        ref : 'Billing',
        required : false
    }],

    billingAddress: {
        zipCode: {type: Number, required: true},
        street: { type: String, required : true},
        city: { type: String, required : true},
        state: { type: String, required : true},
        phoneNo: { type: Number, required : true},
        country: { type: String, required : true},
        buyerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: false},
        status: {type: String}
    },
    shippingAddress: {
        zipCode: {type: Number, required: true},
        street: { type: String, required : true},
        city: { type: String, required : true},
        state: { type: String, required : true},
        phoneNo: { type: Number, required : true},
        country: { type: String, required : true},
        buyerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: false},
        status: {type: String}
    }

});

buyerSchema.methods.addToCart = async function(productId) {
 
    const product = await Product.findById(productId);
    if (product) {
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
            cart.items[isExisting].price = cart.items[isExisting].price + product.price;
        } else {
            cart.items.push({ productId: product._id, qty: 1, price: product.price });
        }
        if (!cart.totalPrice) {
            cart.totalPrice = 0;
            
        }
        if (!cart.totalQty) {
            cart.totalQty = 0;
        }
        cart.totalPrice += product.price;
        cart.totalQty += 1;
        
        console.log("Total quantity", cart.totalQty);
        return this.save();
    }

};


module.exports = mongoose.model('Buyer', buyerSchema);

