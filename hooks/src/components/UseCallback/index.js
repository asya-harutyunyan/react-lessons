// import React, { useState, useCallback } from "react";

// const Counter = ({ onIncrement }) => {
//   return <button onClick={onIncrement}>Increment</button>;
// };

// const UseCallback = () => {
//   const [count, setCount] = useState(0);
//   const [walk, setWalk] = useState(true);

//   const handleClick = () => {
//     setWalk(!walk);
//   };
//   console.log("Component rendering");
//   // Without useCallback:
//   // const handleIncrement = () => {
//   //   setCount(count + 1);
//   // };

//   // With useCallback:
//   const handleIncrement = useCallback(() => {
//     console.log("useCallback function ***************");
//     setCount(count + 1);
//   }, [count]); // Dependencies array, re-create the function only if 'count' changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <Counter onIncrement={handleIncrement} />
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

// export default UseCallback;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useCallback } from "react";

const Item = ({ id, selected, onSelect }) => {
  const handleClick = useCallback(() => {
    onSelect(id);
  }, [id, onSelect]);

  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        background: selected ? "lightblue" : "white",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Item {id}
    </div>
  );
};



const UseCallback = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = useCallback(
    (itemId) => {
      setSelectedItems((prevSelectedItems) => {
        if (prevSelectedItems.includes(itemId)) {
          return prevSelectedItems.filter((id) => id !== itemId);
        } else {
          return [...prevSelectedItems, itemId];
        }
      });
    },
    [] // No dependencies, as the function does not reference any external variables
  );

  return (
    <div>
      <h2>Selected Items: {selectedItems.join(", ")}</h2>
      {Array.from({ length: 5 }, (_, index) => (
        <Item
          key={index}
          id={index}
          selected={selectedItems.includes(index)}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default UseCallback;
