const brandRouter = require('express').Router();
const brandCTL = require('../controllers/brandController');

brandRouter.get('/', brandCTL.fetchBrands);
brandRouter.post('/create', brandCTL.createBrand);

module.exports = brandRouter;