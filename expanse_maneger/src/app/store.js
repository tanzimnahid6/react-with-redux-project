import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import tranjactionSlice from "../features/tranjaction/tranjactionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tranjaction:tranjactionSlice
  },
});
