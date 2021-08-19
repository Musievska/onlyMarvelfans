const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//Get the default connection
var db = mongoose.connection.on('connected', () =>
    console.log('succesfully connected to database',)
);
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;