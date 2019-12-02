import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

//Código para hacer merge a los schemas de graphql

const typesArray = fileLoader(path.join(__dirname, './'))

export default mergeTypes(typesArray, { all: true})
