import React, { Fragment } from "react";
import useLocalStorage from "./useLocalStorage";

const CustomHook2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };

  return (
    <Fragment>
      <form action="" className="w-50" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {tasks.map((task) => (
        <h3 key={Date.now()}> {task.task}</h3>
      ))}
    </Fragment>
  );
};

export default CustomHook2;
