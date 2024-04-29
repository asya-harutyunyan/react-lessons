// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [coloring, setColor] = useState(true);

//   // Log each time the component is rendered
//   console.log(" component is rendering");

//   const changeColor = () => {
//     console.log("Change color function");
//     setColor(!coloring);
//   };

//   useEffect(() => {
//     document.title = `Count:${count}`;
//     console.log("******UseEffect hook *****");
//   }, [count]);

//   return (
//     <>
//       <div>
//         <h1>Title updater</h1>
//         <p>Count:{count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment count</button>
//       </div>
//       <button onClick={changeColor}>Color</button>
//       <h1 style={{ color: coloring ? "red" : "blue" }}>Changed color</h1>
//     </>
//   );
// };

// export default UseEffect;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // This is the side effect code.
//     document.title = `Count:${count}`;
//     // Cleanup function (optional) for when the component unmounts.
//     return () => {
//       document.title = "React App";
//     };
//   }, [count]);

//   return (
//     <div>
//       <h1>Example Component</h1>
//       <p>Count:{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment count</button>
//     </div>
//   );
// };

// export default UseEffect;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return (
//     <div>
//       <h1>Timer</h1>
//       <p>Elapsed Time:{seconds} seconds</p>
//     </div>
//   );
// };

// export default UseEffect;

/////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";

// const useEffectComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default useEffectComponent;

//////////////////////////////////////////////////////////////////

// import React, { useState, useEffect, useCallback } from "react";
// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   // useEffect for side effect
//   useEffect(() => {
//     console.log("Effect ran after count change:", count, "************");
//   }, [count]);

//   // useCallback to memoize a function
//   const handleClick = useCallback(() => {
//     console.log("Callback ran after count change:", count);
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <h2>With useEffect</h2>
//       <p>Count: {count}</p> <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }
// export default ExampleComponent;

////////////////////////////////////////////////////////////////////

// import React from "react";
// import { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [coloring, setColor] = useState(true);
//   const [items, setItems] = useState([]);

//   console.log("render");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));

//     console.log("useEffect function***********");
//   }, [resourceType]);

//   const changeColor = () => {
//     setColor(!coloring);
//   };

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>;
//       })}
//       <button onClick={changeColor}>Color</button>
//       <h1 style={{ color: coloring ? "red" : "blue" }}>Changed color</h1>
//     </>
//   );
// };

// export default UseEffect;


/////////////////////////////////////////////////////////////////

import React, { useEffect, useReducer } from "react";

const initialState = {
  resourceType: "posts",
  coloring: true,
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RESOURCE_TYPE":
      return { ...state, resourceType: action.payload };
    case "TOGGLE_COLOR":
      return { ...state, coloring: !state.coloring };
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state.resourceType}`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_ITEMS", payload: json }));

    console.log("useEffect function***********");
  }, [state.resourceType]);

  const changeColor = () => {
    dispatch({ type: "TOGGLE_COLOR" });
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "SET_RESOURCE_TYPE", payload: "posts" })}>Posts</button>
        <button onClick={() => dispatch({ type: "SET_RESOURCE_TYPE", payload: "users" })}>Users</button>
        <button onClick={() => dispatch({ type: "SET_RESOURCE_TYPE", payload: "comments" })}>Comments</button>
      </div>
      <h1>{state.resourceType}</h1>
      {state.items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
      <button onClick={changeColor}>Color</button>
      <h1 style={{ color: state.coloring ? "red" : "blue" }}>Changed color</h1>
    </>
  );
};

export default UseReducer;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const UseEffect = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [coloring, setColor] = useState(true);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   const changeColor = () => {
//     setColor(!coloring);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("UseEffect renders***********");

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [windowWidth]);

//   console.log("Component renders*********");
//   return (
//     <>
//       <div>{windowWidth}</div>
//       <button onClick={changeColor}>Color</button>
//       <h1 style={{ color: coloring ? "red" : "blue" }}>Changed color</h1>
//     </>
//   );
// };

// export default UseEffect;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [backgroundColor, setBackgroundColor] = useState("white");

//   // useEffect for changing the background color when the component mounts
//   useEffect(() => {
//     // Select the DOM element to manipulate
//     const divElement = document.getElementById("target-div");

//     // Check if the element exists (it may not exist if it's not rendered yet)
//     if (divElement) {
//       // Save the current background color
//       const previousBackgroundColor = divElement.style.backgroundColor;

//       // Set the background color to a new value
//       divElement.style.backgroundColor = "lightblue";

//       // Return a cleanup function to revert the background color when the component unmounts
//       return () => {
//         divElement.style.backgroundColor = previousBackgroundColor;
//       };
//     }
//   }, []); // Empty dependency array means this effect runs only once when the component mounts

//   return (
//     <div>
//       <h1>DOM Manipulation Example</h1>
//       <div id="target-div" style={{ backgroundColor }}>
//         This is the target div for manipulation
//       </div>
//     </div>
//   );
// };

// export default UseEffect;
