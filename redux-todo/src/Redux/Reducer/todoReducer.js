import { ADD_TODO, DELETE_TODO } from "../ActionType/actionType";

const initialTask = {
  taskList: [],
};
export const todoReducers = (state = initialTask, action) => {

  switch (action.type) {
    case ADD_TODO:
      // eslint-disable-next-line no-case-declarations
      const { id, task } = action.payload;
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: id,
            task: task,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
