import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);
  // const [textToShow, setTextToShow] = useState("");

  const onKeyDown = (event) => {
    // console.log(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [newFoodItem, ...foodItems];
      setFoodItems(newItems);
    }
  };

  // let emptyMsg = items.length === 0 ? <h3>I am hungry </h3> : null;

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
