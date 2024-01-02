import styles from "./Item.module.css";

export default function Item({ foodItem }) {
  return (
    <li key={foodItem} className={` ${styles["kg_item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
}
