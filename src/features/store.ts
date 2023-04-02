import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { counterReducer } from "./counter/counterSlice";

export const storeRTK = configureStore({
  reducer: {
    counter: counterReducer,
  },
});



type RootState = ReturnType<typeof storeRTK.getState>

export const useCounterWithRTK:TypedUseSelectorHook<RootState> = useSelector