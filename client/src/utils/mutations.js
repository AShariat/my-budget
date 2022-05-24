import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TRANSACTION = gql `
mutation addTransaction($amount: Int!, $category: String!, $description: String){
  addTransaction(amount: $amount, category: $category, description: $description) {
    amount
    category
    createdAt
    description
    _id
    username
  }
}
`;

export const DELETE_TRANSACTION = gql`
mutation deleteTransaction($transactionId: ID!){
  deleteTransaction(transactionId: $transactionId) {
    _id
  }
}
`;
