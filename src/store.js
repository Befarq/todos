import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./components/TaskSlice";
export const store = configureStore({
  reducer: {
    taskState: TaskSlice,
  },
});
