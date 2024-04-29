import React, { useEffect, useState } from "react";

const ExampleEffect = () => {
  //* sarqum enq tvi 0akan ev popoxvox dirqe count = 0 setCount = function that changes the count value
  const [count, setCount] = useState(0);
  //* sarqum enq message cuyc talu arjeqe ev popoxvox arjeqe
  const [message, setMessage] = useState("");

  //* useEffect, vore vor ashxatum e Count popoxvox arjeqi jamanak
  useEffect(() => {
    //* Eji Count arjeqe grum enq verevum title texe page-i
    document.title = `Count: ${count}`;

    //* paymanov stugum enq te COunt 2 tvi jamanak inch  message nkari
    count % 2 === 0 ? setMessage("zuyg tiv") : setMessage("kent tiv");
  }, [count]); //* useEffect kashxati erb Count tive poxi ev est poxvac tvi kta mez message

  return (
    <div>
      <h1>Using useEffect</h1>
      <p>Count: {count}</p>
      <p>{message}</p>
      {/* //* button vore vor ogtagorcum enq Count tive barcracnelu hamar */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default ExampleEffect;
