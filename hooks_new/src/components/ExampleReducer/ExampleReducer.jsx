import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GUMARUM":
      return { count: state.count + 1 };
    case "HANUM":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ExampleReducer = () => {
  //* useReducer stanume arjeq ev dispatch
  const [state, dispatch] = useReducer(reducer, { count: 10 });
  console.log(state);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "GUMARUM" })}>Increase</button>
      <button onClick={() => dispatch({ type: "HANUM" })}>Decrease</button>
    </div>
  );
};

export default ExampleReducer;
