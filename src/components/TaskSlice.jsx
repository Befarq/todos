import { createSlice } from "@reduxjs/toolkit";

const getArrFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: getArrFromLocalStorage() },
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };

      state.tasks = [...state.tasks, newTodo];
      console.log(state.tasks);
    },
    delUser: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        if (task.id !== action.payload) {
          return task;
        }
      });
    },
    editTask: (state, action) => {
      state.tasks = [...state.tasks];
    },
  },
});
export const { addTask, delUser, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;
