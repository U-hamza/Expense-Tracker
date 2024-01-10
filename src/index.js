import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>
);
