import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <div className="App">Hello World</div>;
    </div>
  );
}

export default App;
