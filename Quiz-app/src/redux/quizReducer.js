// src/redux/quizReducer.js
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SUBMIT_SCORE,
} from "./actionTypes";

const initialState = {
  loading: false,
  questions: [],
  score: 0,
  error: "",
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_SCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

export default quizReducer;
