import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    show_sideBar: JSON.parse(localStorage.getItem("show_sideBar")) || false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      return {
        ...state,
        darkMode: !action.payload,
      };
    },
    toggle_show_sideBar: (state, action) => {
      return {
        ...state,
        show_sideBar: !action.payload,
      };
    },
  },
});
export const { toggleDarkMode, toggle_show_sideBar } = globalSlice.actions;
export default globalSlice.reducer;
