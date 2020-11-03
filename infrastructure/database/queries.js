const connection = require('../connection')

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (erro, resultados, campos) => {
      
      if (erro) {
        reject(erro)
      } else {
        resolve(resultados)
      }
    })
  }) 
}

module.exports = executeQuery

