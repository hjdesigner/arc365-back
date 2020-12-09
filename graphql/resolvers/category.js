const Operations = require('../../infrastructure/operations')
const Category = new Operations('category')

const resolvers = {
  Query: {
    categories: () => Category.list(),
    allCategories: () => Category.allList(),
    category: (root, params) => Category.searchById(params)
  },
  Mutation: {
    addCategory: (root, params) => Category.add(params),
    updateCategory: (root, params) => Category.update(params),
    deleteCategory: (root, params) => Category.delete(params),
  }
}

module.exports = resolvers
