// import React, { useEffect, useRef } from "react";

// const Ref = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} />;
// };

// export default Ref;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";

// const Ref = () => {
//   const count = useRef(0);

//   useEffect(() => {
//     count.current++;
//   });
//   return <div>Count:{count.current}</div>;
// };

// export default Ref;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useRef, useState } from "react";

// const Ref = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   const handleClick = () => {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   };

//   return (
//     <>
//       <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// };

// export default Ref;

////////////////////////////////////////////////////////////////////////////////

// import React, { useRef } from "react";

// function MyComponent() {
//   const inputRef = useRef();
//   const clickCount = useRef(0); // Initialize a mutable value with useRef

//   console.log(inputRef, "input ref");

//   const handleClick = () => {
//     // Accessing and interacting with the DOM element using useRef
//     inputRef.current.value = `Button clicked ${clickCount.current} times`;

//     // Updating the mutable value without causing re-renders
//     clickCount.current += 1;
//   };
//   console.log("component is rendering");
//   return (
//     <div>
//       <input ref={inputRef} placeholder="Click the button" />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default MyComponent;

// The same with useState
// import React, { useState } from "react";

// function MyComponent() {
//   const [inputValue, setInputValue] = useState("");
//   const [clickCount, setClickCount] = useState(0);

//   const handleClick = () => {
//     setInputValue(`Button clicked ${clickCount} times`);
//     setClickCount((prevCount) => prevCount + 1);
//   };

//   console.log("component is rendering");

//   return (
//     <div>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Click the button"
//       />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default MyComponent;

////////////import React, { useRef } from "react";

// import React, { useState } from "react";

// function MyComponent() {
//   const [inputValue, setInputValue] = useState("");
//   const [clickCount, setClickCount] = useState(0);

//   const handleClick = () => {
//     setClickCount(clickCount + 1);
//     setInputValue(`Button clicked ${clickCount + 1} times`);
//   };

//   console.log("component is rendering");

//   return (
//     <div>
//       <input
//         value={inputValue}
//         placeholder="Click the button"
//         onChange={() => {}}
//       />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default MyComponent;

//////////////////////////////////////////////////////////////////

// import React, { useRef, useEffect } from "react";

// function MyComponent() {
//   const myRef = useRef(null);

//   useEffect(() => {
//     // Access the DOM element using myRef.current
//     myRef.current.focus();
//   }, []);

//   return <input ref={myRef} />;
// }
// export default MyComponent;

///////////////////////////////////////////////////////

import React, { useRef } from "react";

function MyComponent() {
  const count = useRef(0);
  console.log("Component rendering");
  const handleClick = () => {
    count.current += 1;
    console.log("Click count:", count.current);
  };

  return <button onClick={handleClick}>Click me</button>;
}
export default MyComponent;

/////////////////////////////////
// The same with useState

// import React, { useState } from "react";

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   console.log("Component rendering");
//   const handleClick = () => {
//     setCount(count + 1);
//     console.log("Click count:", count);
//   };

//   return <button onClick={handleClick}>Click me</button>;
// }
// export default MyComponent;

let arr = [1, 2, 1, 3, 4, 5, 6, 1, 5, 8, 4, 2];

let output = new Set(arr);

console.log(output);
console.log(arr);
