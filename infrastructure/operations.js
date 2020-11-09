const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  list() {
    return cruds[this._entidade].list()
  }
  add(item) {
    return cruds[this._entidade].add(item)
  }
  update(newItem, id) {
    return cruds[this._entidade].update(newItem, id)
  }
  delete(id) {
    return cruds[this._entidade].delete(id)
  }
  searchById(id) {
    return cruds[this._entidade].searchById(id)
  }
}

module.exports = Operations
