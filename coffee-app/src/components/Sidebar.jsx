// src/components/Sidebar.js
import React from "react";
import { useDispatch } from "react-redux";
import { fetchCoffeeData } from "../features/coffeeSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const handleSort = (sortOption) => {
    dispatch(fetchCoffeeData(sortOption));
  };

  return (
    <div className="sidebar">
      <h3>Sort by</h3>
      <button onClick={() => handleSort("price_asc")}>
        Price: Low to High
      </button>
      <button onClick={() => handleSort("price_desc")}>
        Price: High to Low
      </button>
    </div>
  );
}

export default Sidebar;
