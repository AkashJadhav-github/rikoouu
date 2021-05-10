const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Student {
    id: Int!
    firstName: String!
    email: String!
    hobbies: [Hobbies!]!
    }

    type Hobbies {
    id: Int!
    title: String!
    student: Student!
    }

    type Query {
    getStudent(id: Int!): Student
    getAllStudents: [Student!]!
    getHobbies(id: Int!): Hobbies
    getAllHobbies: [Hobbies!]!
    me: Student
    }

    type Mutation {

    createStudent(firstName: String!, email: String!): Student!
    createHobbies( studentId: Int!, title: String!): Hobbies!
    updateStudent(firstName: String!): Student!
    deleteStudent(id: Int!): Boolean!
    }`

module.exports = typeDefs
// updateStudent(firstName: String!): Student!