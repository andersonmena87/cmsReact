import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

//Código para hacer merge a los resolvers de graphql

const resolversArray = fileLoader(path.join(__dirname, './'))

export default mergeResolvers(resolversArray, { all: true})