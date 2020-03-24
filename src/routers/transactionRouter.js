const transactionRouter = require('express').Router();
const transactionCTL = require('../controllers/transactionController');

transactionRouter.get('/bestsellers', transactionCTL.fetchBestSellers);
transactionRouter.post('/create', transactionCTL.createTransaction);

module.exports = transactionRouter;