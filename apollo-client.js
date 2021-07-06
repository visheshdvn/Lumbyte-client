import { ApolloClient, InMemoryCache } from "@apollo/client";

const environment = process.env.NODE_ENV
let uri = null;
if (environment === "production") {
    uri = `https://${process.env.HOSTNAME}/graphql`
} else {
    uri = `http://${process.env.HOSTNAME}/graphql`
}

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});

export default client;