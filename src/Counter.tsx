import React, { useReducer } from "react";
import { string } from "prop-types";

type ActionType = {
  type: "reset" | "decrement" | "increment";
};

const initialState = { count: 0 };
type StateType = {
  count: number;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    // ... to make sure that we don't have any other strings here ...
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

interface Props {
  initialCount: number;
}
export const Counter: React.FC<Props> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      {/* and can dispatch certain events here */}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
