const { Schema, model } = require("mongoose");
const { format } = require("date-fns");

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: "You must indicate an amount",
    },
    category: {
      type: String,
<<<<<<< HEAD
      required: true
    },
    // subCat: {
    //   type: String,
    //   required: true
    // },
=======
      required: true,
    },
>>>>>>> develop
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => format(createdAtVal, "MM/dd/yyyy"),
    },
    description: {
      type: String,
<<<<<<< HEAD
      required: false
    }, 
    username: {
      type: String,
      required: true
    }
=======
      required: false,
    },
>>>>>>> develop
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
