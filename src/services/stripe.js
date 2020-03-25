const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { sumOrderAmount } = require('./calculator');

const paymentIntent = async (amount, currency) => {
  return await stripe.paymentIntents.create({
    amount: sumOrderAmount(amount),
    currency: currency,
    //verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
};


module.exports = {
  paymentIntent
};