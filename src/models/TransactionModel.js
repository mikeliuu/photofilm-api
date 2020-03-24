const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  items: {
    type: Object,
    default: {},
    required: true
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
  currency: {
    type: String,
    default: 'HKD',
    required: true
  },
  status: {
    type: String,
    default: 'pending',
    required: true
  },
  payment_method: {
    type: String,
    default: '',
    required: true
  },
  order_no: {
    type: String,
    default: '',
    required: true
  },
  paid: {
    type: Boolean,
    default: false,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  }
},
{
  versionKey: false
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;