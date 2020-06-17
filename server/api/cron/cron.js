const Product = require('../models/product');
const productcontroller = require('../models/Product')
const User = require('../models/user')
const Order = require('../models/Order')
const Buyer = require('../models/Buyer')


const express = require('express');
const cron = require("node-cron");

const mongoose = require('mongoose');
const orderController = require('../controller/order_controller');
const buyerController = require('../controller/buyer_controller');

orders();

function orders(){






















          // const dateNow = new Date();
          //
          // const orderfromcontroller = orderController.findOrder();
          // const infofrombuyer = buyerController.findBuyer();
          // const infofromproduct = productcontroller.findByIdAndUpdate()  // update the gainpoint
          //
          //
          //
          //      console.log(ben)












    //list order her from order collection
    console.log('connect with  db and query order and list here ');
    //console.log('print all orders ');
    //console.log('filter unreturned order ');
    // console.log('add gain for each order');

}










//cron.schedule("* * * * * *", function() {
    console.log("---------------------");
    console.log("Running Cron Job");
    //put here all from the above
//});
