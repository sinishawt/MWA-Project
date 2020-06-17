// const cron = require("node-cron");
//
// const User = require("../models/Buyer");
//
// const orderModel = require("../models/Order")
//
// exports.run = () => {
//
//     cron.schedule("* * * * * ", function() {
//
//
//         console.log(orderModel.status)
//
//         orderModel.find()
//
//             .then(orders => {
//
//                 orders.forEach(function(order) {
//
//                     const dateNow = new Date()
//
//                     const dateDifference = order.deliveryDate - dateNow
//
//
//
//                         if(dateDifference > 1000000 && order.status=="Ordered" ){
//
//                             console.log('produid', order.buyerId)
//
//                             User.updateOne({_id :order.buyerId}, {$inc:{gainedPoints:111}} ,function (err,data){
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
