// src/redux/quizActions.js
import axios from "axios";
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SUBMIT_SCORE,
} from "./actionTypes";

export const fetchQuestions = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });
    try {
      const response = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
      );
      dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
    }
  };
};

export const submitScore = (score) => {
  return { type: SUBMIT_SCORE, payload: score };
};
