import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import VideoSlice from "../features/Videos/VideoSlice";
import singleVideoSlice from "../features/loadSingleVideo/singleVideoSlice";
import tagsSlice from "../features/tags/fetchAllTagSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: VideoSlice,
    video: singleVideoSlice,
    tags: tagsSlice,
  },
});
