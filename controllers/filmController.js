const ObjectID = require('mongodb').ObjectID;
const FilmModel = require('../models/FilmModel');


exports.fetchFilms = async (req, res) => {
  await FilmModel.find({})
  .then((result) => {
    res.send(result);
    console.log('get "/api/films" success');
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
};

exports.getFilm = async (req, res) => {
  const { id } = req.params;

  await FilmModel.findOne({
    _id: id
  })
  .then((result) => {
    res.send(result);
    console.log(`get "/api/films/${id}" success`);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
};

exports.createFilm = async (req, res) => {
  console.log('req.body', req.body);

  await FilmModel.create(req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.send(result);
    console.log('post "/api/films/create" success');
  });
};

exports.updateFilm = async (req, res) => {
  const { id } = req.params;

  let content = {};

  if(req.body.saved){
    content = {
      saved: req.body.saved,
      updated_at: Date.now()
    }
  };

  if(req.body.viewed){
    content = {
      viewed: req.body.viewed,
      updated_at: Date.now()
    }
  };

  console.log('content',content);

  await FilmModel.findOneAndUpdate(
    { _id: ObjectID(id) },
    content,
    { new: true }
  )
  .then((result) => {
    res.send(result);
    console.log(`put "/api/films/${id}" success`);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
};
