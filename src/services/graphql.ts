import { HttpLink } from "@apollo/client"
import { NextSSRInMemoryCache, NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

export const apolloClient = registerApolloClient(() => {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: new HttpLink({
            uri: process.env.API_ENDPOINT as string
        })
    })
})

// lib/urql.ts
import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getClient = () => {
  if (!_client) {
    _client = createClient({
      url:process.env.API_ENDPOINT as string,
      requestPolicy: "cache-and-network",
      exchanges: [cacheExchange, fetchExchange],
    });
  }
  const client = _client;
  return { client };
};
