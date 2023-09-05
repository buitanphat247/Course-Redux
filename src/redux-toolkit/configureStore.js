import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterslice from "./counterslice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";
const reducer = combineReducers({
  counter: counterslice,
  global: globalSlice,
});
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
store.subscribe(() => {
  console.log(store.getState().counter.count);
});
