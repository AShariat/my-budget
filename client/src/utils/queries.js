<<<<<<< HEAD
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me($username: String!) {
    me(username: $username) {
      username
      email
      transactions {
        amount
        category
        subCat
        createdAt
=======
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
>>>>>>> develop
        description
      }
    }
  }
<<<<<<< HEAD
`;
=======
`;
>>>>>>> develop
