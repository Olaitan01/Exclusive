import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./index.css";
import CartReducer, { getTotal } from "./slice/CartSlice.jsx";


const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

store.dispatch(getTotal())


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
