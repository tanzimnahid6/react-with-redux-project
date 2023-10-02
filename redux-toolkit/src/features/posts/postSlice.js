import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  post: [],
  error: null,
}
export const fetchPosts = createAsyncThunk("post/fetchPost", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts = await res.json()
  return posts
})

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.post = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
      state.payload = []
    })
  },
})

export default postSlice.reducer
