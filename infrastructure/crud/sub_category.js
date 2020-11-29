const executeQuery = require('../database/queries')

class SubCategory {
  add(item) {
    const { id_category, name_sub_category} = item
    const sql = `INSERT INTO sub_category(id_category, name_sub_category) VALUES('${id_category}', '${name_sub_category}')`
    return executeQuery(sql).then((response) => ({
      id_sub_category: response.id,
      id_category,
      name_sub_category,
    }))
  }
}

module.exports = new SubCategory
