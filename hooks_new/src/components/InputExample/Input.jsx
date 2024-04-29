import React, { useEffect, useState } from "react";
import style from "./Input.module.css";

const Input = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Data with useEffect</h1>
      <div className={style.list}>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>

        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.address.city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Input;
