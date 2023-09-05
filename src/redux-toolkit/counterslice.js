import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    increasebyvalue: (state, action) => {
      console.log(action);
      return {
        ...state,
        count: state.count + action.payload.value_number,
      };
    },
  },
});
export const { increment, decrement, increasebyvalue } = counterSlice.actions;
export default counterSlice.reducer;
