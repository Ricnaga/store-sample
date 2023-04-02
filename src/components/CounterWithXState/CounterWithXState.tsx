import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";
import { Counter } from "../Counter/Counter";

const increment = ({ counter }: Record<"counter", number>) => ++counter

const decrement = ({ counter }: Record<"counter", number>) => !!counter ? --counter : counter

enum CounterEnum {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const counterMachine = createMachine({
  predictableActionArguments: true,
  initial: "active",
  context: {
    counter: 0,
  },
  states: {
    active: {
      on: {
        INCREMENT: { actions: assign({ counter: increment }) },
        DECREMENT: { actions: assign({ counter: decrement }) },
      },
    },
  },
});

export function CounterWithXState() {
  const [state, send] = useMachine(counterMachine);
  return (
    <Counter
      counter={state.context.counter}
      handleAdd={() => send(CounterEnum.INCREMENT)}
      handleSubstract={() => send(CounterEnum.DECREMENT)}
      title="XSTATE"
    />
  );
}
