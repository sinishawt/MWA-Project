// const order = require('../models/Order');



// exports.insert = (req,res,next) =>{
//     order.create(req.body)
//         .then(result =>{
//             res.status(200).send(result._id);
//         })
//         .catch(err=>{
//             res.status(500).send({errMsg: err});
//         })
// };

// exports.list = (req, res , next) =>{
//     order.find()
//         .then(orders =>{
//             res.status(200).send(orders);
//         })
//         .catch(err=>{
//             res.status(500).send({errMsg: err});
//         })
// };

// exports.findOrder = (req,res,next) =>{
//     order.findById(req.params.orderid)
//         .then(result=>{
//             res.status(200).send(result);
//         }).catch(err=>{
//         res.status(500).send({errMsg: err});
//     })
// };

// exports.removeOrder = (req,res, next) =>{
//     order.findByIdAndDelete(req.params.orderid)
//         .then(result=>{
//             res.status(200).send(result);
//         }).catch(err=>{
//         res.status(500).send({ errMsg: err });
//     })
// };

const Product = require('../models/Product');
const Buyer =  require('../models/Buyer');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');
const order = require('../models/Order')


exports.placeOrder = (req, res, next)=>{
    const id = req.params.id;
    console.log("shipping address: ", req.body)
    Buyer.findById(id)
            .exec()
            .then(doc => {
                
                if(doc){
                    for(let i=0; i < doc.cart.items.length; i++){
                        const ord = new order({               
                            _id: new mongoose.Types.ObjectId(),
                            buyerId: id,
                            sellerId: doc.cart.items[i].sellerId,
                            productId: doc.cart.items[i].productId,
                            status: "Pending",
                            orderDate: new Date(),
                           
                            shippingAddress: req.body   
                        });
                        ord.save()
                        .then(result => {
                            res.status(200).json({message: 'Product inserted Successfully',});
                        })
                        .catch(err => {
                           
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        }); 
                    }  
                            res.status(200).json(doc.cart.items[0].productId);
                    
                } else{
                    res.status(404).json({message: 'No items in the cart'});
                }
            })
            .catch(err => {
                console.log("Memar #####");
              console.log(err);
                res.status(500).json({error: err})
            });

};


