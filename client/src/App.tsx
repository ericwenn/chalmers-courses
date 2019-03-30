import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle } from 'styled-components';
import { client } from './graphql/client';
import { Courses } from './pages/courses';

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    margin: 0;
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }
`;


export const App = () => (
  <ApolloProvider client={client}>
    <Courses />
    <GlobalStyle />
  </ApolloProvider>
);
