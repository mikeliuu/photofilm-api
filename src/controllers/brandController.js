const BrandModel = require('../models/BrandModel');

const fetchBrand = (req, res) => {
  BrandModel.find({})
  .then((result) => {
    res.send(result);
    console.log('get "/api/brand" success');
  })
  .catch(err => {
    console.log('fetchBrand error', err);
    res.sendStatus(400);
  });
};

const createBrand = (req, res) => {
  console.log('createBrand post req.body', req.body);
  
  BrandModel.create(req.body, (err, result) => {
    if(err) {
      console.log('createBrand error', err);
      res.send(400);
    }
    res.send(result);
    console.log('post "/api/brand/create" success');
  });
};

module.exports = {
  fetchBrand,
  createBrand
};