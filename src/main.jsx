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
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { ConfigProvider } from "antd";

window._ = lodash;
window.$ = jquery;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider>
      <ChakraProvider>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </Provider>
      </ChakraProvider>
    </ConfigProvider>
  </BrowserRouter>
);
