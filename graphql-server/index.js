import { ApolloServer } from "apollo-server";
import Link from "./src/models/link.js";

const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}

type Mutation {
    post(url: String!, description: String!): Link!
    deleteLink(id: ID!): Link!
}

type Link {
    id: ID!
    description: String!
    url: String!
}

`;

const resolvers = {
  Query: {
    info: () => `api testing`,
    feed: async() => {
        const links = await Link.find();
        return links;

    },
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  Mutation: {
    post: async (parent, args) => {

        const link = new Link({
            url: args.url,
            description: args.description
        })

        const saveLink = await link.save();
        return saveLink;

    },
    deleteLink: async (parent, args) => {
        const deletedLink = await Link.findByIdAndDelete(args.id);
        return deletedLink

    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000, () => {
  console.log("running on port 4000");
});
