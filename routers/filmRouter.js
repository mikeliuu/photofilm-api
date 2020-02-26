const filmRouter = require('express').Router();
const filmCTL = require('../controllers/filmController');


filmRouter.get('/', filmCTL.fetchFilms);
filmRouter.get('/:id', filmCTL.getFilm);
filmRouter.put('/:id', filmCTL.updateFilm);
filmRouter.post('/create', filmCTL.createFilm);


module.exports = filmRouter;