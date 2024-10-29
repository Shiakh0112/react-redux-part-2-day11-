// src/components/Auth.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/actionTypes";

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: LOGIN });
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
