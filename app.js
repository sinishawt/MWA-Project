const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/product_route');
const orderRoutes = require('./api/routes/order_route');
const reviewRoutes = require('./api/routes/review_route');
const adminRoutes = require('./api/routes/admin_route');
const buyerRoutes = require('./api/routes/buyer_route');
//const authRoutes = require('./api/routes/auth_route');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});
//routes which handle requests
//app.use('/auth', authRoutes);
app.use('/buyer', buyerRoutes);
app.use('/products', productRoutes);
app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);
app.use('/admin', adminRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;