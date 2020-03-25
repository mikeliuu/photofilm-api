const transactionRouter = require('express').Router();
const transactionCTL = require('../controllers/transactionController');

transactionRouter.get('/bestsellers', transactionCTL.fetchBestSellers);
transactionRouter.post('/create-payment-intent', transactionCTL.createPaymentIntent);

module.exports = transactionRouter;