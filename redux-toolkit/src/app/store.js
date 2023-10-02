import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"
import  todoSlice  from "../features/todo/todoSlice"
import { createLogger } from "redux-logger"
import postSlice from "../features/posts/postSlice"

const logger = createLogger()

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo:todoSlice,
    post:postSlice
  },
  middleware:(getDefaultMiddleWare)=>{
   return getDefaultMiddleWare().concat(logger)

  }
})
export default store
