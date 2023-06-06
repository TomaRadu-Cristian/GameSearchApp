import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme1 from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme1}>
      <ColorModeScript initialColorMode={theme1.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
