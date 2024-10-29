// src/components/Result.jsx
import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { score } = useSelector((state) => state.quiz);

  return (
    <div>
      <h1>Quiz Result</h1>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
