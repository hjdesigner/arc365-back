const executeQuery = require('../database/queries')

class Category {
  list() {
    const sql = 'SELECT * FROM category'
    return executeQuery(sql).then(data => data)
  }
  add(item) {
    const { name_category } = item
    const sql = `INSERT INTO category(name_category) VALUES('${name_category}')`
    return executeQuery(sql).then((response) => ({
      id_category: response.id,
      name_category,
    }))
  }
}

module.exports = new Category
