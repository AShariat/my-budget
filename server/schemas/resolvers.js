const { AuthenticationError } = require("apollo-server-express");
const { User, Transaction } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("transactions");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password").populate("transactions");
    },
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("transactions");
    },
    // find all transactions by username
    transactions: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Transaction.find(params).sort({ createdAt: -1 });
    },
    // find a single transaction by id
    transaction: async (parent, { _id }) => {
      return Transaction.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addTransaction: async (parent, args, context) => {
      if (context.user) {
        const transaction = await Transaction.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { transactions: transaction._id } },
          { new: true }
        );

        return transaction;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
