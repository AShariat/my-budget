import { gql } from "@apollo/client";

export const QUERY_TRANSACTIONS = gql`
  query transactions($username: String) {
    transactions(username: $username) {
      _id
      amount
      category
      createdAt
      description
      username
    }
  }
`;

export const QUERY_TRANSACTION = gql`
  query transaction($transactionId: ID!) {
    transaction(_id: $transactionId) {
      _id
      amount
      category
      createdAt
      description
      username
    }
  }
`;

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      transactions {
        _id
        username
        category
        amount
        description
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      transactions {
        _id
        username
        category
        amount
        description
        createdAt
      }
    }
  }
`;
