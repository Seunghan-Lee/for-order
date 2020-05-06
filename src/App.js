import React from 'react';
import Header from './components/Header';

import { ApolloProvider } from 'react-apollo';   
import { ApolloClient } from 'apollo-client';    
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://fororder.local/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false,
      httpLink,
      client
      // httpLink = createHttpLink({
      //   uri: 'http://fororder.local/graphql'   
      // }),
      // client = new ApolloClient({
      //   link: httpLink,                
      //   cache: new InMemoryCache()   
      // })
     };
  }                             

  render() {
    const { isLoading, httpLink, client } = this.state;
    return (
      <ApolloProvider client={client} httpLink={httpLink}>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="container">
              <Header />
            </div>
          )
        }
      </ApolloProvider>
    )
  }
}

export default App;
