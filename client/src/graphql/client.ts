import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';

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
  uri: 'http://localhost:3000',
  cache,
});
