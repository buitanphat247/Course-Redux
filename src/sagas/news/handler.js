// woker saga in there
import { put, call, select } from "redux-saga/effects";
import requestGetNews from "./request";
import { setData, setLoading } from "./newsSlice";

export default function* handleGetNews(action) {
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query);
    if (newsQuery === "") query = "react";
    else query = action.payload;
    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setData(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
