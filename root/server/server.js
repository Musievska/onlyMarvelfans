const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./config/db');
require('dotenv').config();
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
db();


app.use('/', routes);

app.use('/', (req, res) => {
    res.send('hello');
}
);
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`running on port ${port}`);
})

module.exports = app;
