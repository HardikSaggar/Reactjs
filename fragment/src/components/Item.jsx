import { useState } from "react";
import styles from "./Item.module.css";

export default function Item({ foodItem, bought, handleBuyButton }) {
  const [buttonText, setButtonText] = useState(bought ? "Remove" : "Buy");
  const [isActive, setIsActive] = useState(bought);

  const handleButtonClick = () => {
    if (isActive) {
      setIsActive(false); // Remove the active class
      setButtonText("Buy"); // Change the button text to "Buy"
      // Additional logic to handle item removal if needed
    } else {
      setIsActive(true); // Add the active class
      setButtonText("Remove"); // Change the button text to "Remove"
      // Additional logic to handle item addition if needed
    }
    handleBuyButton(); // Call the original handleBuyButton function
  };

  return (
    <li
      key={foodItem}
      className={`${styles["kg-item"]} list-group-item ${
        isActive ? "active" : ""
      }`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </li>
  );
}
