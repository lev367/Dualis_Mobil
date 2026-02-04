const express = require('express');

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


var port = process.env.PORT || 5000;

require('./routes/index')(app);

app.listen(port);

console.log(`Az alkalmazás ezen a porton fut: ${port}`);

module.exports = app;