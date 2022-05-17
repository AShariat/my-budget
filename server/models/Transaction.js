const { Schema, model } = require('mongoose');
const taxesSchema = require('./Transactions/Housing/Taxes');

const transactionSchema = new Schema(
  {
    amount: {
      type: Int,
      required: 'You must indicate an amount',
    },
    mainCat: {
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
)