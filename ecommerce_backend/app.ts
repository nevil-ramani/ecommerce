import { MongooseError } from "mongoose";

const express = require("express");
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');

mongoose.set('debug', true);

//express
const app = express();

//configure express app 
app.use(express.json());

//.env
dotenv.config()


//import routes
import userRoutes from './routes/user.route';

//database connection
mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ECOM_DB'
}).then(() => {
    console.log('Database Connection is ready...')
}).catch((err: MongooseError) => {
    console.log(err);
})




//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Use the user routes
app.use('/api', userRoutes);


// server start
app.listen(3001, (console.log('server is running on http://localhost:3001')));