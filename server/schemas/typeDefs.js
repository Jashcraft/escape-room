const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    admin: Boolean
  }
  type Room {
    _id: ID
    name: String
    location: String
    description: String
    maxNumberOfParticipants: Int
    minNumberOfParticipants: Int
    minAgeRequirement: Int
    successRate: Int
    imageLocation: String
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
    rooms: [Room]
    room(id: ID!): Room
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(addUserInput: AddUserInput): Auth
  }
  `;


module.exports = typeDefs;
