import { ApolloClient, InMemoryCache } from '@apollo/client';
import apolloServerUri from '../components/config.js'

const createApolloClient = () => {
  return new ApolloClient({
    uri: `${apolloServerUri}`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;