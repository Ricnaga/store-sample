import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
};

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };
    }
    case "counter/decrement": {
      return {
        ...state,
        counter: {
          value: state.counter.value - 1,
        },
      };
    }
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

export function CounterWithOldRedux() {
  const counter = useSelector<{ counter: { value: number } }>(
    (state) => state.counter.value
  ) as number;

  const dispatch = useDispatch()

  const onIncrement = () => dispatch({ type: "counter/increment" });
  const onDecrement = () => dispatch({ type: "counter/decrement" });

  return (
    <>
      <h1>With Old Redux (Deprecated)</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <button onClick={onDecrement}>-</button>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>+</button>
      </div>
    </>
  );
}
