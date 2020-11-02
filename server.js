const connection = require('./src/infrastructure/connection')

connection.connect(erro => {
  if (erro) {
    return console.log(erro)
  }

  console.log('successful connection')
})
