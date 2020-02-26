require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const filmRouter = require('./routers/filmRouter');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cms-zll3o.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => {
  console.log('mongodb connected');
})
.catch(err => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useFindAndModify: false }));
app.use(cors());

app.use('/api/films', filmRouter);


app.get('/', (req, res) => {
  res.send('running photofilm api server');
  console.log('get "/" success');
  
});

app.listen(process.env.WEB_PORT, () => {
  console.log(`Listening on port: ${process.env.WEB_PORT}`);
});
