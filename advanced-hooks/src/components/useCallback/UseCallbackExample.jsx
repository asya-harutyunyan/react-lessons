import React, { memo, useCallback, useState } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, "Some Task"]);
    console.log("**************");
  }, [setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = memo(({ addTask }) => {
  console.log("Button is rendering to the screen");
  return (
    <div>
      <button onClick={addTask} className="btn btn-primary">
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
