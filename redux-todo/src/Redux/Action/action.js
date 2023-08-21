import { ADD_TODO,DELETE_ALL_TASK,DELETE_TODO } from "../ActionType/actionType";
export const addTask = (task)=>{
    
    return{
        type:ADD_TODO,
        payload:{
            id:new Date().getTime().toString(),
            task:task
        }

    }
}
export const deleteTask = (id) =>{
    return {
      type: DELETE_TODO,
      payload:id
      
    };
} 
export const clearTask = ()=>{
    return {
        type:DELETE_ALL_TASK
    }
}