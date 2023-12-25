import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  // const increase = () => {
  //   setCount(counter + 1);
  // };

  const increase = () => {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  };

  const decrease = () => {
    setCount(counter - 1);
  };

  return (
    <>
      <h1>Hello</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={increase}>Increase+</button>
      <button onClick={decrease}>Decrease-</button>
    </>
  );
}

export default App;
