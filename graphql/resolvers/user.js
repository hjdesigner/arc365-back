const Operations = require('../../infrastructure/operations')
const User = new Operations('user')

const resolvers = {
  Mutation: {
    addUser: (root, params) => User.add(params)
  }
}

module.exports = resolvers
