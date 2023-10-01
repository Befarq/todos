import { useSelector } from "react-redux";
import { delUser } from "../components/TaskSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskState.tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks || []));
  return (
    <div className="text-center">
      {tasks &&
        tasks.map((task) => {
          console.log(task.id);
          return (
            <ul className="form-control">
              <li
                key={task.id}
                className="text-3xl p-3 w-full flex justify-between"
              >
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  value={task.completed}
                />
                <p className="text-black w-96">{task.title}</p>
                <Link to={`/edit/${task.id}`} className="btn btn-primary">
                  edit
                </Link>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    dispatch(delUser(task.id));
                  }}
                >
                  delete
                </button>
              </li>
            </ul>
          );
        })}
      {tasks.length < 1 && (
        <>
          <h1 className="w-full h-full mx-auto p-8 text-4xl text-red-600">
            Hozircha vazifalar mavjud emas!
          </h1>
        </>
      )}
      <Link to="/create" className="btn btn-primary">
        Add
      </Link>
    </div>
  );
}

export default TaskList;
