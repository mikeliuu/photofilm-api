const filmsRouter = require('express').Router();
const filmsCTL = require('../controllers/filmsController');

filmsRouter.get('/', filmsCTL.fetchFilms);
filmsRouter.get('/:slug', filmsCTL.getFilm);
filmsRouter.put('/:id', filmsCTL.updateFilm);
filmsRouter.post('/create', filmsCTL.createFilm);


module.exports = filmsRouter;