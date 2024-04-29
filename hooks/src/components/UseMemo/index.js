// import React, { useState, useMemo } from "react";

// const ExpensiveComponent = ({ data }) => {
//   // Suppose data is an array and we want to compute its sum
//   const sum = useMemo(() => {
//     console.log("Computing sum...");
//     return data.reduce((acc, value) => acc + value, 0);
//   }, [data]);

//   console.log(data);
//   return (
//     <div>
//       <p>Sum: {sum}</p>
//     </div>
//   );
// };

// const UseMemo = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   const [walk, setWalk] = useState(true);

//   const handleClick = () => {
//     setWalk(!walk);
//   };
//   console.log("Component rendering");
//   return (
//     <div>
//       <ExpensiveComponent data={numbers} />
//       <button onClick={() => setNumbers([...numbers, Math.random()])}>
//         Add Number
//       </button>
//       <br />
//       <button onClick={handleClick} style={{ margin: "20px" }}>
//         Change to {walk ? "Stop" : "Walk"}
//       </button>
//       <h1 style={{ color: walk ? "green" : "red" }}>
//         {walk ? "Walk" : "Stop"}
//       </h1>
//     </div>
//   );
// };

// export default UseMemo;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Memoizing a Complex Computation

// import React, { useMemo } from "react";

// const UseMemo = ({ a, b }) => {
//   const result = useMemo(() => {
//     console.log("Performing complex computation...");
//     // Assume a complex computation based on props a and b
//     return a * b;
//   }, [a, b]);

//   return (
//     <div>
//       <p>Result: {result}</p>
//     </div>
//   );
// };

// export default UseMemo;

/////////////////////////////////////////////////////////////////

import React, { useState, useMemo } from "react";

const ExpensiveComponent = ({ data }) => {
  // Assume a costly operation on the data
  const result = useMemo(() => {
    console.log("Performing expensive operation...");
    return data.filter((item) => item > 2);
  }, [data]);

  console.log(data, "data");
  return (
    <div>
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const UseMemoExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div>
      <ExpensiveComponent data={numbers} />
      <button onClick={() => setNumbers([...numbers, Math.random() * 10])}>
        Add Number
      </button>
    </div>
  );
};
export default UseMemoExample;

///////////////////////////////////////////////////////////////////////////

// import React, { useMemo, useState } from 'react';

// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);

//   // Memoizing a value that doesn't depend on any props or state
//   const memoizedValue = useMemo(() => {
//     console.log('Memoizing without dependencies...');
//     return count * 2;
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Memoized Value: {memoizedValue}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// };

// export default ExampleComponent;
