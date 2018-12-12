import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';

const {
  REACT_APP_GRAPHQL_URL = 'http://localhost:3000',
} = window.ENV;


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE',
          name: 'Requirement',
          possibleTypes: [
            { name: 'CompulsoryRequirement' },
            { name: 'CompulsoryElectiveRequirement' },
          ],
        },
      ],
    },
  },
});


const cache = new InMemoryCache({ fragmentMatcher });


export const client = new ApolloClient({
  uri: REACT_APP_GRAPHQL_URL,
  cache,
});
