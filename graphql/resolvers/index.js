const path = require('path')
const mergeGraphQlSchemas = require('merge-graphql-schemas')

const files = path.join(__dirname, './')

const {
  fileLoader
} = mergeGraphQlSchemas

const uploadedFiles = fileLoader(files)

module.exports = uploadedFiles
