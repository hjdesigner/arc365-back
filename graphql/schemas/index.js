const path = require('path')
const mergeGraphQlSchemas = require('merge-graphql-schemas')

const files = path.join(__dirname, './')

const {
    fileLoader,
    mergeTypes
} = mergeGraphQlSchemas

const uploadedFiles = fileLoader(files)

const schemas = mergeTypes(uploadedFiles)

module.exports = schemas
