import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => {
      state++;
      return state;
    },
    decrement: (state) => {
      state--;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
