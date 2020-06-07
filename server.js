const http = require('http');
const app = require('./app');
const connectDB = require('./api/config/dbconnection');

connectDB();

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, ()=>{
    console.log('Server is Running ....')
});