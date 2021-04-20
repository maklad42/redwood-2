export const schema = gql`
  type Task {
    id: Int!
    task: String!
    project: String!
    start: DateTime!
    due: DateTime!
    createdAt: DateTime!
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task
  }

  input CreateTaskInput {
    task: String!
    project: String!
    start: DateTime!
    due: DateTime!
  }

  input UpdateTaskInput {
    task: String
    project: String
    start: DateTime
    due: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: Int!, input: UpdateTaskInput!): Task!
    deleteTask(id: Int!): Task!
  }
`
