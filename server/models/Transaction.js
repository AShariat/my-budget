const { Schema, model } = require('mongoose');

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: 'You must indicate an amount',
    },
    category: {
      type: String,
      required: true
    },
    subCat: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
);

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;