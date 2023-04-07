import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        age: Int
        posts: [Post]
    }

    type Post {
        id: String
        title: String
        content: String
    }

    input UserInput {
        name: String!
        age: Int!
        posts: [PostInput]
    }

    input PostInput {
        title: String!
        content: String!
    }

    type Query {
        allUsers: [User]
        user(id: ID): User
    }

    type Mutation {
        create(input: UserInput): User
    }
`);

export { schema };