import React from "react";
import { useState } from "react";
import { addTask } from "./TaskSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const handleCreate = () => {
    if (task.length > 3) {
      dispatch(addTask(task));
      navigate("/");
    } else {
      alert("Ko'proq matn kiriting");
    }
  };
  return (
    <div className="bg-transparent w-full flex justify-between input">
      <input
        value={task}
        type="text"
        className="bg-white input input-bordered w-[75%]  text-green-900"
        placeholder="Type here your task"
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button className="btn btn-primary mx-1" onClick={handleCreate}>
        Add task
      </button>{" "}
      <button className="btn btn-error mx-1" onClick={() => navigate("/")}>
        Bekor qilish
      </button>
    </div>
  );
}
export default Create;
