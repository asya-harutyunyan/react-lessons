import React, { useEffect, useMemo, useRef, useState } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);
  console.log(renders, "renders**********");

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => setInc((prevState) => prevState + 1);
  console.log(sqrt, "************");
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick}>Re render</button>
      <h1>Renders:{renders.current}</h1>
    </div>
  );
};

const getSqrt = (number) => {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }

  console.log("Expensive function called");
  return Math.sqrt(number);
};

export default UseMemoExample;
