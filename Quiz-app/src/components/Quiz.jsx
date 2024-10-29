// src/components/Quiz.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, submitScore } from "../redux/quizActions";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, questions, score } = useSelector((state) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch(submitScore(1));
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/result"); // Navigate to result page
    }
  };

  if (loading) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestion ? (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </>
      ) : (
        <div>No Questions Available</div>
      )}
      <div>Your Score: {score}</div>
    </div>
  );
};

export default Quiz;
