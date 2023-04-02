import { Provider } from "react-redux";
import { CounterWithOldRedux, storeRedux } from "./CounterWithOldRedux";
import { CounterWithRTK } from "./CounterWithRTK";
import { CounterWithState } from "./CounterWithState";
import { storeRTK } from "./features/store";

function App() {
  return (
    <>
      <CounterWithState />
      <Provider store={storeRedux}>
        <CounterWithOldRedux />
      </Provider>
      <Provider store={storeRTK}>
        <CounterWithRTK />
      </Provider>
    </>
  );
}

export default App;
