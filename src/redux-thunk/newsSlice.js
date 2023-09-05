import { createSlice } from "@reduxjs/toolkit";
import { handleFetchNews } from "./handler";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    loading: true,
    errorMessage: "",
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.data = [];
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
      });
  },
});
export const { setQuery } = newsSlice.actions;
export default newsSlice.reducer;
