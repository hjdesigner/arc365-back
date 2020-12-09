const executeQuery = require('../database/queries')

class Category {
  list() {
    const sql = 'SELECT * FROM category'
    return executeQuery(sql).then(data => data)
  }
  allList() {
    const sql = 'SELECT * FROM category; SELECT * FROM sub_category';
    return executeQuery(sql).then(data => {
      const categories = data[0]
      const subCategories = data[1]
      
      return categories.map(category => {
        const sub = subCategories.filter(item => item.id_category === category.id_category)
        return ({
          ...category,
          subCategory: sub
        })
      })
    })
  }
  add(item) {
    const { name_category } = item
    const sql = `INSERT INTO category(name_category) VALUES('${name_category}')`
    return executeQuery(sql).then((response) => ({
      id_category: response.id,
      name_category,
    }))
  }
  update(newItem) {
    const { id_category, name_category } = newItem
    const sql = `UPDATE category SET name_category='${name_category}' WHERE id_category=${id_category};`
    return executeQuery(sql).then(() => newItem)
  }
  delete(item) {
    const { id_category } = item
    const sql = `DELETE FROM category WHERE id_category=${id_category}`
    return executeQuery(sql).then(() => id_category)
  }
  searchById(item) {
    const { id_category } = item
    const sql = `SELECT * FROM category WHERE id_category=${id_category}`
    return executeQuery(sql).then(data => data[0]);
  }
}

module.exports = new Category
