import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import VideoSlice from "../features/Videos/VideoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos:VideoSlice
  },
});
