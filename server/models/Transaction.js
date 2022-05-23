const { Schema, model } = require("mongoose");
// format(new Date(), 'MM/dd/yyyy');
const { format } = require("date-fns");

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: "You must indicate an amount",
    },
    category: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => format(createdAtVal, "MM/dd/yyyy"),
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
