import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'           // 수정
import { ApolloClient } from 'apollo-client'            // 수정
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({                       // 수정
  uri: 'http://fororder.local/graphql'                          // 수정
})                                                      // 수정
const client = new ApolloClient({
  link: httpLink,                                       // 수정
  cache: new InMemoryCache()                            // 수정
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();