import { useDispatch, useSelector } from "react-redux"
import { decrement, increaseByAmount, increment, reset } from "./counterSlice"
import TodoView from "../todo/TodoView"

const CounterView = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }
  const increaseBy5 = () => {
    dispatch(increaseByAmount(5))
  }
  return (
    <div className="flex w-full justify-center">
      <div>
        <h1 className="text-center text-xl font-bold">Count:{count}</h1>
        <button onClick={handleIncrement} className="btn btn-sm btn-primary">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-sm btn-primary">
          Decrement
        </button>
        <button onClick={handleReset} className="btn btn-sm btn-primary">
          Reset
        </button>
        <button onClick={increaseBy5} className="btn btn-sm btn-primary">
          increase5
        </button>
      </div>
      <TodoView></TodoView>
    </div>
  )
}

export default CounterView
