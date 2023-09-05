import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./request";
export const handleFetchNews = createAsyncThunk(
  "news/fetch-news",
  async (query, thunkAPI) => {
    if (query === "") query = "react";
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
