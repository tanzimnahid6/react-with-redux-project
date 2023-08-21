import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../Redux/Action/action";
import { useEffect, useRef } from "react";

const Todo = () => {
  const tasks = useSelector((state) => state.todo.taskList);
 
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;
  
    form.reset();
    dispatch(addTask(task));
  };

  // focusing input element after loading
 const inputElement = useRef();
 const focusInput = () => {
   inputElement.current.focus();
 };
 useEffect(()=>{
    focusInput();
 })
 

  //Delete the task
  const handleToDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="m-2 border-2 border-green-600">
      <form className="flex justify-between" onSubmit={handleLogin}>
        <input
          type="text"
          name="task"
          placeholder="Enter your task"
          ref={inputElement}
          className="border-2 border-green-400 px-4 w-full  py-2"
        />
        <input type="submit" className="btn btn-success" value="Add" />
      </form>
      <div>
        <div className="overflow-x-auto font-bold text-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-black">
                <th>Index</th>
                <th>Task Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, id) => (
                <tr key={task.id} className="bg-green-500">
                  <td>{id + 1}</td>
                  <td>{task.task}</td>
                  <td
                    data-tip="Want to delete ?"
                    onClick={() => handleToDeleteTask(task.id)}
                    className="btn btn-warning tooltip tooltip-bottom"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Todo;
