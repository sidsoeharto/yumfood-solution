const express = require('express');
const app = express();
const port = 4000;
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router);
app.use(errorHandler);

app.listen(port, console.log(`Listening on Port ${port}`))

module.exports = app


