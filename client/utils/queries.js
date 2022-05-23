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
        description
      }
    }
  }
`;