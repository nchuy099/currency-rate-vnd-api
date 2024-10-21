require('dotenv').config;
const express = require('express');


const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

app.listen(port, hostname, () => {
    console.log('hello');
});