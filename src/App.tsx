import { CounterWithRTK } from "./components/CounterWithRTK/CounterWithRTK";
import { CounterRTKContext } from "./components/CounterWithRTK/context/CounterRTKContext";
import { CounterWithState } from "./components/CounterWithXState/CounterWithState";
import { CounterWithXState } from "./components/CounterWithXState/CounterWithXState";

function App() {
  return (
    <>
      <CounterWithState />
      <CounterRTKContext>
        <CounterWithRTK />
      </CounterRTKContext>
      <CounterWithXState />
    </>
  );
}

export default App;
