import { gql } from "@apollo/client";

export const QUERY_TRANSACTIONS = gql`
  query transactions($username: String) {
    transactions(username: $username) {
      _id
      amount
      category
      createdAt
      description
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
        amount
        category
        createdAt
        username
        description
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      transactions {
        _id
        amount
        category
        createdAt
        username
        description
      }
    }
  }
`;