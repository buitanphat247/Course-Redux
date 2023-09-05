// watcher saga in there
import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNews from "./handler";

export function* newSaga() {
  yield takeLatest(getNews.type, handleGetNews); // catch action và gọi workers saga
  // bắt thằng getNews.type và gọi hamdleGetUser
}
