import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `https://${process.env.HOSTNAME}/graphql`,
    cache: new InMemoryCache()
});

export default client;