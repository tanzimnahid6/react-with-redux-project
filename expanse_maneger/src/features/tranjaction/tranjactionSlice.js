import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactionItems: [],
  editingItem: {},
};
//=================CRUD================START=====================================
//get tranjaction api function
export const fetchAsyncTransaction = createAsyncThunk(
  "tranjaction/fetchTranjaction",
  async () => {
    const res = await fetch("http://localhost:3000/transactions");
    const data = await res.json();
    return data;
  }
);
//add tranjaction api function
export const addAsyncTranjaction = createAsyncThunk(
  "tranjaction/addTranjaction",
  async (obj) => {
    const res = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(obj),
    });
    const data = res.json();
    return data;
  }
);
//delete tranjaction api
export const deleteAsyncTranjaction = createAsyncThunk(
  "delete/tranjaction",
  async (id) => {
    const res = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = res.json();
    return data;
  }
);
//Update single tranjaction api
export const updateAsyncTranjaction = createAsyncThunk(
  "update/tranjaction",
  async ({ id, obj }) => {
    const res = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json()
    return data
  }
);
//=================CRUD================END=====================================

const tranjactionSlice = createSlice({
  name: "tranjaction",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editingItem = action.payload;
    },
    editInActive: (state) => {
      state.editingItem = {};
    },
  },
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
          (state.error = "error occured loading");
      })
      .addCase(addAsyncTranjaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAsyncTranjaction.fulfilled, (state, action) => {
        (state.isLoading = false), state.transactionItems.push(action.payload);
      })
      .addCase(addAsyncTranjaction.rejected, (state) => {
        (state.isError = true),
          (state.transactionItems = []),
          (state.error = "error occured from add tranjaction");
      })
      .addCase(deleteAsyncTranjaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAsyncTranjaction.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.transactionItems = state.transactionItems.filter(
            (item) => item.id !== action.payload
          ));
      })
      .addCase(deleteAsyncTranjaction.rejected, (state) => {
        (state.isError = true),
          (state.transactionItems = []),
          (state.error = "error occured from add tranjaction");
      });
  },
});
export const { editActive, editInActive } = tranjactionSlice.actions;

export default tranjactionSlice.reducer;
