import { ApolloClient, InMemoryCache } from '@apollo/client'

// we’ll use Apollo Client to be calling the API directly instead of using Apollo hooks.
const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache()
})

export default client