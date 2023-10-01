import React, { useRef } from "react";
import { useState } from "react";
import { editTask } from "./TaskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.taskState.tasks);
  const editingTask = tasks.filter((t) => t.id == id);
  const [task, setTask] = useState(editingTask[0]);
  const inputTask = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAssign = () => {
    dispatch(editTask(task));
    setTask(" ");
    inputTask.value = "";
    navigate("/");
  };
  return (
    <div className="w-full flex justify-between input">
      <input
        ref={inputTask}
        value={task.title}
        type="text"
        className="input input-bordered w-[75%]  text-green-900"
        placeholder="Type here your task"
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button className="btn btn-primary" onClick={handleAssign}>
        Assign
      </button>
    </div>
  );
}
export default Edit;
