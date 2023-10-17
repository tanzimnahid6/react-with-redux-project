import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactionItems: [],
  editingItem: {},
};

export const fetchAsyncTransaction = createAsyncThunk(
  "tranjaction/fetchTranjaction",
  async () => {
    const res = await fetch("http://localhost:3000/transactions");
    const data = await res.json();
    return data;
  }
);
const tranjactionSlice = createSlice({
  name: "tranjaction",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncTransaction.fulfilled, (state, action) => {
        (state.isLoading = false), (state.transactionItems = action.payload);
      })
      .addCase(fetchAsyncTransaction.rejected, (state) => {
        (state.isError = true),
          (state.transactionItems = []),
          (state.error = "error occured from slice");
      });
  },
});

export default tranjactionSlice.reducer;
