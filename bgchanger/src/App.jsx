import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="window" style={{ backgroundColor: color }}>
        <div className="box">
          {/* <div className=""></div> */}
          <button
            className="color-pallet green"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="color-pallet blue"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="color-pallet red"
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
