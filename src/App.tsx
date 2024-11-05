import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ justifyContent: "center", alignContent: "center" }}>
      <div className="App">Div Deleter</div>
      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
    </div>
  );
}

export default App;
