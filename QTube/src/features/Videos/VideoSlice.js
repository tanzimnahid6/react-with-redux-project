import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
}

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const res = await fetch("http://localhost:3000/videos")
  const videos = await res.json()
  return videos
})

const videoSlice = createSlice({
  name: "videos",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false
        state.isLoading = true
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.videos = action.payload
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false
        state.videos = []
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default videoSlice.reducer
