import React from "react";
import UseFetchExample from "./UseFetchExample";

const CustomComponents = () => {
  const { data, loading } = UseFetchExample(
    "http://jsonplaceholder.typicode.com/posts",
    {}
  );
  console.log(data);
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default CustomComponents;
