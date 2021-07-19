import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.PROTOCOL}://${process.env.HOSTNAME}/graphql`,
    cache: new InMemoryCache()
});

export default client;