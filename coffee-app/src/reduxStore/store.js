// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "../features/coffeeSlice";
import { thunk } from "redux-thunk"; // Use named import for thunk
import logger from "redux-logger"; // standard import

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
