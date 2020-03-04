'use strict'
require('dotenv').config();
require("regenerator-runtime/runtime");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('../config.json');

const filmsRouter = require('./routers/filmsRouter');
const postsRouter = require('./routers/postsRouter');
const authRouter = require('./controllers/authController');

const app = express();

if(process.env.NODE_ENV === "development") {
  config.DB_USER = process.env.DB_USER;
  config.DB_KEY = process.env.DB_KEY;
};

mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_KEY}@cms-zll3o.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useFindAndModify: false }));
app.use(cors());

app.use('/api/films', filmsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Photofilm API server is running');
  console.log('get "/" success');
});

app.listen(config.WEB_PORT, () => {
  console.log(`Listening on port: ${config.WEB_PORT}`);
});
