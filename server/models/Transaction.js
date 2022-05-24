const { Schema, model } = require("mongoose");
const { format } = require("date-fns");

const transactionSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: "You Must Indicate an Amount!",
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => format(createdAtVal, "MM/dd/yyyy"),
  },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
