import { useDispatch, useSelector } from "react-redux"
import { addTask, fetchTodo } from "./todoSlice"
import { useEffect } from "react"

const TodoView = () => {
  const {isLoading, todo } = useSelector((state) => state.todo)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  const handleTask = (e) => {
    e.preventDefault()
    const task = e.target.task.value
    dispatch(addTask(task))
  }
  return (
    <div>
      <div className="border-2 border-blue-500 rounded mx-2">
        <h1 className="text-center font-bold text-2xl">Todo Section</h1>
        <form onSubmit={handleTask} action="">
          <input
            type="text"
            name="task"
            placeholder="Enter "
            className="border-2 border-blue-500 mx-2 rounded"
          />
          <input
            type="submit"
            value="Submit"
            className="btn-primary btn-sm btn"
          />
        </form>
        <ul>
        {isLoading && <h1>Todo list loading from server...</h1>}
          {todo.map((item, index) => (
            <li key={item.id}>
              {index + 1}.{item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoView
