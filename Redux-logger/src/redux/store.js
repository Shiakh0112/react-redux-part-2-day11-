// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import actionLogger from "../middleware/actionLogger";
import payloadLogger from "../middleware/payloadLogger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLogger, payloadLogger),
});

export default store;
