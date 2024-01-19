import { useState } from "react";
import "./App.css";
import Button from "./components/ClickButton";
import Input from "./components/InputDisplay";

function App() {
  const [btnValue, setBtnValue] = useState([]);

  const onClickHandler = (val) => {
    setBtnValue(val);
  };

  return (
    <>
      <div className="container">
        {/* <input type="text" value={btnValue} readOnly /> */}
        <Input btnValueHandler={btnValue}/>
        {/* <button className='click-btn' onClick={onClickHandler}>Bye</button> */}
        <Button handleOnClick={onClickHandler} />
      </div>
    </>
  );
}

export default App;
