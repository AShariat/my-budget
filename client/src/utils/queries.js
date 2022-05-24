<<<<<<< HEAD
import { gql } from '@apollo/client';

export const QUERY_TRANSACTIONS = gql`
  query transactions($username: String) {
    thoughts(username: $username) {
=======
import { gql } from "@apollo/client";

export const QUERY_TRANSACTIONS = gql`
  query transactions($username: String) {
    transactions(username: $username) {
>>>>>>> develop
      _id
      amount
      category
      createdAt
      description
<<<<<<< HEAD
      username
    }
  }
`;
=======
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
>>>>>>> develop
