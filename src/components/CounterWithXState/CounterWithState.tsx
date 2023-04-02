import { useState } from "react";
import { Counter } from "../Counter/Counter";

export function CounterWithState() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Counter
      counter={counter}
      handleAdd={() => setCounter(counter + 1)}
      handleSubstract={() =>
        setCounter((state) => (state > 0 ? state - 1 : state))
      }
      title="STATE"
    />
  );
}
