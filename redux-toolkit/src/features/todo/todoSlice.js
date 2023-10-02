import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  todo: [],
  error: null,
}

function getNextId(todoList) {
  const maxId = todoList.reduce((max, task) => {
    return task.id > max ? task.id : max
  }, 0)

  return maxId + 1
}
export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  const todo = await res.json()
  return todo
})

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.todo.push({
        id: getNextId(state.todo),
        title: action.payload,
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.todo = action.payload
    })
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
      state.payload = []
    })
  },
})

export const { addTask } = todoSlice.actions
export default todoSlice.reducer
