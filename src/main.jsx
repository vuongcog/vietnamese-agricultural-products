import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/css/styles.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
