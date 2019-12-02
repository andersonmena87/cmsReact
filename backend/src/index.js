//Dependencies
import { ApolloServer, makeExecutableSchema} from 'apollo-server';

//Models
import models from './models'

//Type Definitions 
import typeDefs from './grahpql/types'
//Resolvers
import resolvers from './grahpql/resolvers'

//Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

//Apollo server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

//Runing Apollo Server
//EL parametro force elimina la tablas y vuelve y las crea
const alter = true
const force = false

models.sequelize.sync({alter, force }).then(() =>{
  apolloServer.listen(5000).then(({ url }) => console.log(`Runing on ${url}`))
})