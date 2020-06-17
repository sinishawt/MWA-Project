// const cron = require("node-cron");
//
//
//
// const User = require("../models/Buyer");
//
// const orderModel = require("../models/Order")
//
//
//
// exports.run = () => {
//     //all your task here
//     cron.schedule("* * * * * ", function() {
//
//
//             console.log(orderModel.status)
//
//
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
//                     if(order.status === "delivered") {
//
//
//                         if(dateDifference > 1000000 ){
//
//                             User.updateOne({_id :order.buyerId}, {$inc:{gainedPoints:111}} ,function (err,data){
//                                 console.log(err)
//                             })
//
//                         }
//
//
//
//
//                     }
//
//
//
//
//                     //console.log(req.user._id)
//
//
//
//                     // console.log('user', User.findById())
//                     //
//                     // console.log("price ; ", order.price);
//                     //
//                     console.log("time difference ; ", dateDifference);
//                     // console.log("time Now : ",  dateNow);
//                     // console.log("-------------------");
//                 }); //
//
//             })
//             .catch(err => console.log(err));
//
//
//
//
//
//
//
//
//
//
//
//         //1. get all orders with status=delivered
//         //2. for each order calculate diff
//             //3. if diff >= 10day
//             //4. add user.gain increment by 10% of price and update order.status=closed
//             //loop everyday
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
