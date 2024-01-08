import { useState } from "react";
import Item from "./Item";

export default function FoodItems({ items }) {
  // let foodItems = ["Sprouts", "Chappati", "Milk", "Pulses"];
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          // handleBuyButton={() => console.log("clicked")} //parents giving method to child that can can call from its parent
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
}
