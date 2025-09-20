import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { env } from "./env";

const MainURI = createHttpLink({
  uri: env.hygraph.baseURL,
});

const Authorization = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const CompleteURI = Authorization.concat(MainURI);

const HygraphApolloClient = new ApolloClient({
  link: CompleteURI,
  cache: new InMemoryCache(),
});

export default HygraphApolloClient;
