import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/styles.scss";
import { Provider } from "react-redux";
import { store } from "./configStore/configStore";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
