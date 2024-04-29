import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [coloring, setColor] = useState(true);

  const changeColor = () => {
    setColor(!coloring);
  };

  // Log each time the component is rendered
  console.log("UseState component is rendering");

  const handleClick = () => {
    console.log("***************");
    setCount((e)=>e+1);
  };
  return (
    <>
      <button onClick={handleClick}>You pressed {count} times</button>;
      <button onClick={changeColor}>Color</button>
      <h1 style={{ color: coloring ? "red" : "blue" }}>Changed color</h1>
    </>
  );
};

export default UseState;

// /////////////////////////////////////////
// import React, { useState, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [coloring, setColor] = useState(true);

//   console.log("component ");
//   const changeColor = () => {
//     console.log("change color function");
//     setColor(!coloring);
//   };

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//       <button onClick={changeColor}>Color</button>
//       <h1 style={{ color: coloring ? "red" : "blue" }}>Changed color</h1>
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const UseState = () => {
//   const [text, setText] = useState("hello");

//   // Log each time the component is rendered
//   console.log("UseState component is rendering", text);

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed:{text}</p>
//       <button onClick={() => setText("hello")}>Reset</button>
//     </>
//   );
// };

// export default UseState;

///////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const UseState = () => {
//   const [liked, setLiked] = useState(true);

//   const handleChange = (e) => {
//     setLiked(e.target.checked);
//   };
//   return (
//     <>
//       <label>
//         <input type="checkbox" checked={liked} onChange={handleChange} />I liked
//         this
//       </label>
//       <p>You {liked ? "liked" : "didn't like"} this</p>
//     </>
//   );
// };

// export default UseState;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const UseState = () => {
//   const [name, setName] = useState("Taylor");
//   const [age, setAge] = useState(42);
//   console.log("UseState component is rendering");
//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={() => setAge(age + 1)}>Increment age</button>
//       <p>
//         Hello {name}. You are {age}.
//       </p>
//     </>
//   );
// };

// export default UseState;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const UseState = () => {
//   const [isToggled, setToggle] = useState(false);
//   const [color, setColor] = useState(false);

//   const toggle = () => {
//     setToggle(!isToggled);
//   };

//   const changeColor = () => {
//     setColor(!color);
//   };

//   return (
//     <div>
//       <p>Toggle state:{isToggled ? "On" : "Off"}</p>
//       <button
//         onClick={() => {
//           toggle();
//           changeColor();
//         }}
//         style={{ backgroundColor: color ? "green" : "red" }}
//       >
//         Toggle
//       </button>
//     </div>
//   );
// };

// export default UseState;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Passing the updater function
// import React, { useState } from "react";

// const UseState = () => {
//   const [age, setAge] = useState(42);

//   const increment = () => {
//     setAge((a) => a + 1);
//   };

//   return (
//     <>
//       <h1>Your age:{age}</h1>
//       <button
//         onClick={() => {
//           increment();
//           increment();
//           increment();
//         }}
//       >
//         +3
//       </button>
//       <button
//         onClick={() => {
//           increment();
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// };

// export default UseState;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Passing the next state directly

// import React, { useState } from "react";

// const UseState = () => {
//   const [age, setAge] = useState(42);

//   const increment = () => {
//     setAge(age+ 1);
//   };

//   return (
//     <>
//       <h1>Your age:{age}</h1>
//       <button
//         onClick={() => {
//           increment();
//           increment();
//           increment();
//         }}
//       >
//         +3
//       </button>
//       <button
//         onClick={() => {
//           increment();
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// };

// export default UseState;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const UseState = () => {
//   const [walk, setWalk] = useState(true);

//   const handleClick = () => {
//     setWalk(!walk);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
//       <h1 style={{ color: walk ? "green" : "red" }}>
//         {walk ? "Walk" : "Stop"}
//       </h1>
//     </>
//   );
// };

// export default UseState;
