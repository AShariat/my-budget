const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    transactions: [Transaction]
  }

  type Transaction {
    _id: ID
    amount: Int
    category: String
    createdAt: String
    username: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    transactions(username: String): [Transaction]
    transaction(_id: ID!): Transaction
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTransaction(
      amount: Int!
      category: String!
      description: String
    ): Transaction
  }
`;

module.exports = typeDefs;
