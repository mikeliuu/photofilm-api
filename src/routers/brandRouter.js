const brandRouter = require('express').Router();
const brandCTL = require('../controllers/brandController');

brandRouter.get('/', brandCTL.fetchBrand);
brandRouter.post('/create', brandCTL.createBrand);

module.exports = brandRouter;