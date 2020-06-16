const Product = require('../models/product');
const User = require('../models/user')
const Order = require('../models/Order')


const express = require('express');
const cron = require("node-cron");

const mongoose = require('mongoose');
const orderController = require('../controller/order_controller');

orders();
function orders(){

const dateNow = new Date();

    const delivereddate = Order.findById('5ee7d596ee0ed001dce0c230');

    console.log(delivereddate)



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
