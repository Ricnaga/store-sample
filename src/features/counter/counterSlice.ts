import { createSlice } from "@reduxjs/toolkit";

type CounterState = Record<"value", number>;

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = !!state.value ? state.value - 1 : state.value;
    },
  },
});

export const { decrement, increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
