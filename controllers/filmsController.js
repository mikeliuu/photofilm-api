const ObjectID = require('mongodb').ObjectID;
const FilmModel = require('../models/FilmModel');


const fetchFilms = (req, res) => {
  FilmModel.find({})
  .then((result) => {
    res.send(result);
    console.log('get "/api/films" success');
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  });
};

const getFilm = (req, res) => {
  const { id } = req.params;

  FilmModel.findOne({
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

const createFilm = (req, res) => {
  console.log('req.body', req.body);

  const slug = req.body.name && (
    req.body.name.toLowerCase()
    .trim()
    .replace(/^\s|\s$/g,'')
    .replace(/[^a-z0-9 -]/g,'')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
  );

  req.body = {...req.body, seo: {slug}}

  console.log('req.body.seo.slug', req.body.seo.slug);
  

  FilmModel.create(req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.send(400);
    }
    res.send(result);
    console.log('post "/api/films/create" success');
  });
};

const updateFilm = (req, res) => {
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

  FilmModel.findOneAndUpdate(
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


module.exports = {
  fetchFilms,
  getFilm,
  createFilm,
  updateFilm
};