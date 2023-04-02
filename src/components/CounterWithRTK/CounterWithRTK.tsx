import { useDispatch } from "react-redux";
import { Counter } from "../Counter/Counter";
import { decrement, increment } from "../../features/counter/counterSlice";
import { useCounterWithRTK } from "../../features/store";

export function CounterWithRTK() {
  const counter = useCounterWithRTK((state) => state.counter.value);

  const dispatch = useDispatch();

  const onAdd = () => dispatch(increment());
  const onSubstract = () => dispatch(decrement());

  return (
    <Counter
      counter={counter}
      handleAdd={onAdd}
      handleSubstract={onSubstract}
      title="RTK"
    />
  );
}
