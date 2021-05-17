import React from "react";

import { registerRootComponent } from "expo";
import { API_URL, API_TOKEN } from "@env";

import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${API_TOKEN}`,
    },
});

const RootComponent = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent);
