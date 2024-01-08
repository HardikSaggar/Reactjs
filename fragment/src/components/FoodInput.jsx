import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={`${styles.foodInput}`}
      type="text"
      placeholder="Enter Food Items here"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
