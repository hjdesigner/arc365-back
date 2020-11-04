const Operations = require('../../infrastructure/operations')
const Category = new Operations('category')

const resolvers = {
  Query: {
    categories: () => Category.list(),
    category: (root, params) => Category.searchById(params)
  },
  Mutation: {
    addCategory: (root, params) => Category.add(params),
    uploadCategory: (root, params) => Category.upload(params),
    deleteCategory: (root, params) => Category.delete(params),
  }
}

module.exports = resolvers
