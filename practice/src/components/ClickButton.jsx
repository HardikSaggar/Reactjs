import styles from "./ClickButton.module.css";

export default function Button({ handleOnClick }) {
  let buttonOpt = ["Hello", "Bye", "New"];

  return buttonOpt.map((btn) => (
    <button
      className={`${styles["click-btn"]}`}
      onClick={() => handleOnClick(btn)}
    >
      {btn}
    </button>
  ));
}
