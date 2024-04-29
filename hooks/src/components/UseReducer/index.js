// import React, { useReducer } from "react";

// // Define a reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // Initial state
// const initialState = { count: 0 };

// function Counter() {
//   // Use useReducer to manage state
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state, "STATE");
//   console.log(dispatch, "Dispatch");
//   console.log(reducer, "reducer");
//   console.log(initialState, "initial state");

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

////////////////////////////////////////////////////////////////////////////

import React, { useReducer } from "react";

const emailReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
};

const Reducer = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const { value, isValid } = emailState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  return (
    <div>
      <label htmlFor="email"> E-mail</label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        style={!isValid && isValid !== null ? { border: "1px solid red" } : {}}
      />
    </div>
  );
};

export default Reducer;
