import { useState } from "react";

export function CounterWithState() {
  const [counter, setCounter] = useState(0);

  return (
    <>
    <h1>With State</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <button
          onClick={() => setCounter((state) => (state > 0 ? state - 1 : state))}
        >
          -
        </button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}
