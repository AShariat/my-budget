import { gql } from '@apollo/client';

export const QUERY_TRANSACTIONS = gql`
  query transactions($username: String) {
    thoughts(username: $username) {
      _id
      amount
      category
      createdAt
      description
      username
    }
  }
`;