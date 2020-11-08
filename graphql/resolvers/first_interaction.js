const Operations = require('../../infrastructure/operations')
const FirstInteraction = new Operations('first_interaction')

const resolvers = {
  Query: {
    first_interaction: () => FirstInteraction.list()
  }
}

module.exports = resolvers
