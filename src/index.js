import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "app/store";

import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
