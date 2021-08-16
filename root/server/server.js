const express = require('express');
const helmet = require("helmet");
const mongoose = require('mongoose');


const app = express();

app.use(helmet());


mongoose.connect('mongodb://localhost:27017/mongo-tree', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected db')
});
app.use('/', (req, res) => {
    res.send('hello');
}
);
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('running');
})

module.exports = app;
