import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchSingleVideo = createAsyncThunk("videos/fetchSingleVideo", async (id) => {
  const res = await fetch(`http://localhost:3000/videos/${id}`);
  const videos = await res.json();
  return videos;
});

const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default singleVideoSlice.reducer;
