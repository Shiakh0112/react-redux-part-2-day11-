// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import quizReducer from "./quizReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware( logger));

export default store;
