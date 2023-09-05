import { createAction, createSlice } from "@reduxjs/toolkit";

export const otherAction = createAction("updateLoading");
const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    loading: true,
    errorMessage: "",
    query: "",
  },
  reducers: {
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    getNews: (state, actions) => ({
      ...state,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      console.log("🚀 ~ file: newsSlice.js:35 ~ builder.addCase ~ action:", action)
      state.loading = action.payload;
    });
  },
});
export const { setLoading, setData, getNews, setQuery, setErrorMessage } =
  newsSlice.actions;
export default newsSlice.reducer;
