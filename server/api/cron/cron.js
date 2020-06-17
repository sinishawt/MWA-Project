// const cron = require("node-cron");
//
// const User = require("../models/Buyer");
//
// const orderModel = require("../models/Order")
// const productModel = require("../models/Product")
//
// exports.run = () => {
//
//     cron.schedule("* * * * * * * ", function() {
//
//
//         //console.log(orderModel.status)
//
//         orderModel.find()
//
//             .then(orders => {
//
//                 orders.forEach(function(order) {
//
//                     const dateNow = new Date()
//
//                     const dateDifference = dateNow - order.deliveryDate
//
//
//                                                // 20 days in seconds
//                         if(dateDifference > 1728000 && order.status=="delivered" ){
//
//                             console.log('produid', order.buyerId)
//
//
//
//                               //const gainedPoint = (order.productId.price)*0.5
//
//
//
//
//                             User.updateOne({_id :order.buyerId}, {$inc:{gainedPoints:10}} ,function (err,data){
//                                 console.log(err)
//                             })
//
//                             orderModel.updateOne({_id :order._id}, {status:'Done'} ,function (err,data){
//                                 console.log(err)
//                             })
//
//                         }
//
//
//                     console.log("time difference ; ", dateDifference);
//                     console.log('produid', order.buyerId)
//
//                 });
//
//             })
//             .catch(err => console.log(err));
//
//
//
//         console.log("---------------------");
//         console.log("Running Cron Job");
//
//     });
//
//
//     console.log("cron next ..... //just do it")
// }
//
