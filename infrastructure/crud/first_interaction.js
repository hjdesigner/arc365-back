const executeQuery = require('../database/queries')

class FirstInteraction {
  list() {
    const sql = `SELECT * FROM first_interaction WHERE id_first_interaction=1;`
    return executeQuery(sql).then(data => data);
  }
}

module.exports = new FirstInteraction
