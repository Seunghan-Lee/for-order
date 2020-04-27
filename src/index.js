import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://fororder.local/graphql',
});

client
.query({
  query: gql`
    {
      menuItems(where: {location: PRIMARY}) {
        nodes {
        menuItemId
        url
        cssClasses
        label
        target
        }
      }
    }
  `
})
.then(result => console.log('result = '+result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

