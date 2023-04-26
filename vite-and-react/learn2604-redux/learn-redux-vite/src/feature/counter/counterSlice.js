import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

let slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

console.log(slice);

export const { increment, decrement } = slice.actions;
export default slice.reducer;
