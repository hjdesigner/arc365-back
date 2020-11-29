const Operations = require('../../infrastructure/operations')
const SubCategory = new Operations('sub_category')

const resolvers = {
  Mutation: {
    addSubCategory: (root, params) => SubCategory.add(params),
  }
}

module.exports = resolvers
