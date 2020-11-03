const { GraphQLServer } = require('graphql-yoga')
const connection = require('./infrastructure/connection')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schemas')

connection.connect(erro => {
  if (erro) {
    return console.log(erro)
  }

  console.log('successful connection')
})

const server = new GraphQLServer({
  resolvers,
  typeDefs
})

server.start(() => console.log('API Arc 365 run'))
