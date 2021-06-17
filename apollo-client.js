import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://172.18.234.163:1337/graphql",
    cache: new InMemoryCache()
});

export default client;