import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FilterContextProvider } from "./context/filter_context.js";
import { CartProvider } from "./context/cart_context.js";
import { AppProvider } from "./context/product_contex.js";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-tvcd40ge3hhjkrr7.us.auth0.com"
    clientId="xqend1fQXruPN2FuSsSkPwbSgCi4JVQd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

reportWebVitals();
