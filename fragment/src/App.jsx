import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css'

function App() {
  // let foodItems = [];
  let foodItems = ["Sprouts", "Chappati", "Milk", "Pulses",'Vegetables'];
  
  // let emptyMsg = items.length === 0 ? <h3>I am hungry </h3> : null;

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
