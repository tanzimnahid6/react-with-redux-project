import { createSlice } from "@reduxjs/toolkit"
import { addTask } from "../todo/todoSlice"

const initialState = { count: 0 }
//collection of logic is called slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    },
    reset: (state) => {
      state.count = 0
    },
    increaseByAmount: (state, action) => {
      const multiplier = action.payload * 5
      state.count = state.count + multiplier
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state) => {
      state.count++
    })
  },
})
export const { increment, decrement, reset, increaseByAmount } =
  counterSlice.actions
export default counterSlice.reducer
