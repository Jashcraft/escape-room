const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
  }
  input AddUserInput{
    firstName: String
    lastName: String
    email: String
    password: String
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    user(id: ID): User
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(addUserInput: AddUserInput): Auth
  }
  `;


module.exports = typeDefs;
