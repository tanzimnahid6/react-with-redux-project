import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
  likes: 0,
  isLoading: false,
  isError: false,
  error: "",
};

const likeSlice = createSlice({
  name: "likes",
  initialState: initialState,
  reducers: {
    likeIncrement: (state) => {
      state.likes += 1;
    },
  },
});
export const { likeIncrement } = likeSlice.actions;
export default likeSlice.reducer;
