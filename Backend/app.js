const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
