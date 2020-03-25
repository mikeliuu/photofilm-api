const TransactionModel = require('../models/TransactionModel');
// const ObjectID = require('mongodb').ObjectID;
// const FilmModel = require('../models/FilmModel');

const fetchBestSellers = (req, res) => {
  TransactionModel.find({})
  .then((result) => {

    //sort out paid record
    const paidRecords = (result && result.length > 0) && result.filter(i => i.paid === true);

    //records mapping
    const mappedRecords = paidRecords.reduce((acc, cur) => {
      cur.items.forEach(film => acc.push({
          "_id": film._id,
          "name": film.name,
          "brand": film.brand,
          "sold": 1
        })
      );
      return acc;
    }, []);

    //reults
    const bestSellers = mappedRecords.reduce((acc, val) => {
      let item = acc.filter(i => {
        return i.item.name === val.name && i.item.brand.name === val.brand.name;
      }).pop() || {
        "item": {
          "_id": val._id,
          "name": val.name,
          "brand": val.brand
        }, 
        "sold": 0
      };

      item.sold += val.sold;
      acc.push(item);
      return acc;
    }, []).filter((itm, index, arr) => index === arr.indexOf(itm)).sort((prev, next) => next.sold - prev.sold);

    res.send(bestSellers);

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