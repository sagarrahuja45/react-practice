import {ApolloServer} from 'apollo-server';

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}
type Link {
    id: ID!
    description: String!
    url: String!
}

`

const resolvers = {
    Query: {
        info: ()=> `api testing`,
        feed: ()=> links,
    },
    Link:{
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,



    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000, ()=>{
    console.log("running on port 4000");
})