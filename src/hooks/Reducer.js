import React, { useReducer } from "react";

export default function Reducer() {
  const initialState = {
    count: 0
  };
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </>
  );
}
