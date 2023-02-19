import { useState } from "react";
import TestComponent from "./components/TestComponent";
import TodoApp from "./components/TodoApp";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {count > 5 ? <h1>Count lớn hơn 5</h1> : <TestComponent />}
    </div>
  );
}

export default App;
