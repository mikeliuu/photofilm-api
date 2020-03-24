const TransactionModel = require('../models/TransactionModel');
// const ObjectID = require('mongodb').ObjectID;
// const FilmModel = require('../models/FilmModel');

const fetchBestSellers = (req, res) => {
  TransactionModel.find({})
  .then((result) => {

    //purchasedFilms should have 3
    const purchasedFilms = (result && result.length > 0) && result.filter(i => i.paid === true);

    //map items
    const mapItems = purchasedFilms && purchasedFilms.reduce((total, list) => {
      list.items.forEach(film => {
        total.push({"film": film.name, "brand": film.brand.name, "quantity": 1})
      });

      return total;
    }, []);

    console.log(mapItems);
    
    res.send(purchasedFilms);

    console.log('get "/api/transactions/bestsellers" success');
  })
  .catch(err => {
    console.log('fetchBestSellers error', err);
    res.sendStatus(400);
  });
};

const createTransaction = async (req, res) => {
  console.log('createTransaction post req.body', req.body);

  // temp data
  // const film = await FilmModel.find({
  //   _id: ObjectID('5e4658f5853903e1b0a8b75b')
  // })
  // .then((result) => result[0]);
  // const item = [film, film, film]
  // req.body = {
  //   item,
  //   "amount": "180",
  //   "currency": "HKD",
  //   "status": "fulfilled",
  //   "payment_method": "card",
  //   "order_no": "000004",
  //   "paid": true,
  //   "created_at": "2020-03-24T16:07:50.958Z"
  // }

  TransactionModel.create(req.body, (err, result) => {
    if(err) {
      console.log('createTransaction error', err);
      res.send(400);
    }
    res.send(result);
    console.log('post "/api/transactions/create" success');
  });
};

module.exports = {
  fetchBestSellers,
  createTransaction
};