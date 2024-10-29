// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import CoffeeList from "./components/CoffeeList";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <CoffeeList />
    </div>
  );
}

export default App;
