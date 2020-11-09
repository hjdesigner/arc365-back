const executeQuery = require('../database/queries')

class FirstInteraction {
  list() {
    const sql = `SELECT * FROM first_interaction WHERE id_first_interaction=1;`
    return executeQuery(sql).then(data => data);
  }
  update(newItem) {
    const { id_first_interaction, status_first_interaction } = newItem;
    const sql = `UPDATE first_interaction SET status_first_interaction=${status_first_interaction} WHERE id_first_interaction=${id_first_interaction};`
    return executeQuery(sql).then(() => newItem)
  }
}

module.exports = new FirstInteraction
