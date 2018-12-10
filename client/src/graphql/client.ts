import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';

const {
  REACT_APP_GRAPHL_URL = 'http://localhost:3000',
} = process.env;

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
  uri: REACT_APP_GRAPHL_URL,
  cache,
});
