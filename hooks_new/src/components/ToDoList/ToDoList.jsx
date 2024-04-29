import React, { useReducer, useState } from "react";
import style from "./ToDoList.module.css";

//* function reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text, completed: false }];
    case "TOGGLE":
      return state.map((task, index) =>
        index === action.index ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [newTask, setNewTask] = useState("");

  const add = () => {
    if (newTask.trim() !== "") {
      dispatch({ type: "ADD", text: newTask });
      setNewTask("");
    }
  };

  return (
    <div className={style.list}>
      <h2>ToDo List</h2>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={add}>Добавить</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: "TOGGLE", index })}
            />
            {task.text}
            <button onClick={() => dispatch({ type: "REMOVE", index })}>
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
