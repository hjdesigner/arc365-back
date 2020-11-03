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
}

module.exports = Operations
