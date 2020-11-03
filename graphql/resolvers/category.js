const Operations = require('../../infrastructure/operations')
const Category = new Operations('category')

const resolvers = {
  Query: {
    categories: () => Category.list(),
  },
  Mutation: {
    addCategory: (root, params) => Category.add(params)
  }
}

module.exports = resolvers
