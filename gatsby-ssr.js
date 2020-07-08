import React from 'react'
import fetch from 'isomorphic-fetch'
import ws from 'ws'
import { WebSocketLink } from '@apollo/link-ws'
import { setContext } from 'apollo-link-context'
import { getMainDefinition } from '@apollo/client/utilities'
import {
  split,
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { graphql_endpoint } from './src/lib/auth/config'
import { auth } from './src/lib/auth/nhostAuth'
import GlobalContextProvider from './src/context/globalContextProvider'
const httpUrl = graphql_endpoint
const wsUrl = httpUrl.startsWith('https')
  ? httpUrl.replace(/^https/, 'wss')
  : httpUrl.replace(/^http/, 'ws')

const httpLink = new HttpLink({
  uri: httpUrl,
  fetch,
})

const wsLink = new WebSocketLink({
  uri: wsUrl,
  options: {
    reconnect: true,
    connectionParams: () => {
      const jwtToken = auth.getJWTToken()
      return jwtToken
        ? {
            headers: {
              authorization: `Bearer ${jwtToken}`,
            },
          }
        : {
            headers: {
              'x-hasura-role': 'anonymous',
            },
          }
    },
  },
  webSocketImpl: typeof window === 'undefined' ? ws : null,
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const authLink = setContext((a, { headers }) => {
  const jwtToken = auth.getJWTToken()
  return jwtToken
    ? {
        headers: {
          ...headers,
          authorization: `Bearer ${jwtToken}`,
        },
      }
    : {
        headers: {
          ...headers,
          'x-hasura-role': 'anonymous',
        },
      }
})

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: authLink.concat(splitLink),
})

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </GlobalContextProvider>
)
