import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FilterContextProvider } from "./context/filter_context.js";
import { CartProvider } from "./context/cart_context.js";
import { AppProvider } from "./context/product_contex.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
);

reportWebVitals();
