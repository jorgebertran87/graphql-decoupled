import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from "./type_defs";
import {resolvers} from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(response => {
  console.log(`🚀  Server ready at: ${response.url}`);
}).catch(err => {
  console.error(err);
});


