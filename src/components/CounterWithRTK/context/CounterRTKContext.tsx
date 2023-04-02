import { ReactNode } from "react";
import { storeRTK } from "../features/store";
import { Provider } from "react-redux";

interface CounterRTKContextProps {
  children: ReactNode;
}
export function CounterRTKContext({ children }: CounterRTKContextProps) {
  return <Provider store={storeRTK}>{children}</Provider>;
}
