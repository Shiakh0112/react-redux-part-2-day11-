// src/components/CoffeeList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffeeData } from "../features/coffeeSlice";

function CoffeeList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffeeData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid">
      {items.map((coffee) => (
        <div key={coffee.id} className="card">
          <img src={coffee.image} alt={coffee.name} />
          <h3>{coffee.name}</h3>
          <p>{coffee.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CoffeeList;
