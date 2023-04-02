import { useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import { useCounterWithRTK } from "./features/store";

export function CounterWithRTK() {
  const counter = useCounterWithRTK(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  const onAdd = () => dispatch(increment());
  const onSubstract = () => dispatch(decrement());

  return (
    <>
      <h1>With RTK</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <button onClick={onSubstract}>-</button>
        <h1>{counter}</h1>
        <button onClick={onAdd}>+</button>
      </div>
    </>
  );
}
