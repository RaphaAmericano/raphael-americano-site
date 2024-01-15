import { getClient, apolloClient } from "@/services/graphql";
import { ApolloProvider } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"
import { __DEV__ } from "@apollo/client/utilities/globals";

const { getClient:getApolloClient } = apolloClient;

export function ApolloProviderComponent({ children } : { children : React.ReactNode}){
    if(__DEV__){
        loadDevMessages()
        loadErrorMessages()
    }

    return <ApolloProvider client={getApolloClient()} >{children}</ApolloProvider>
}