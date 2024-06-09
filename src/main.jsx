import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/styles.scss";
import "./assets/css/abstracts/_index.scss";
import { Provider } from "react-redux";
import store from "./configStore/configStore";
import jquery from "jquery";
import lodash from "lodash";
import { ChakraProvider } from "@chakra-ui/react";

window._ = lodash;
window.$ = jquery;
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
