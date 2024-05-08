import React from "react";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa"; 
import "./App.css";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "71d65241-bf76-4e10-8a42-6b78b7f1c7c1", 
      walletConnectors: [
        EthereumWalletConnectors,
        ZeroDevSmartWalletConnectors
      ],
    }}
  >
    <div className="App-header">
      <DynamicWidget />
    </div>
  </DynamicContextProvider>
);

export default App;
