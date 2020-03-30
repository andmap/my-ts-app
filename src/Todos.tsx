import React, { useReducer } from "react";
import { string } from "prop-types";

type Actions =
  | { type: "reset" }
  | { type: "add"; text: string }
  | { type: "remove"; idx: number };

interface Todo {
  text: string;
  completed: boolean;
}

const initialState = { todos: [] };

interface StateType {
  todos: Todo[];
}

const reducer = (state: StateType = { todos: [] }, action: Actions) => {
  switch (action.type) {
    case "reset":
      return initialState;

    case "add":
      const todos = [...state.todos, { text: action.text, completed: false }];
      return {
        todos: todos
      };

    case "remove":
      return { todos: state.todos.filter((_, i) => action.idx !== i) };

    default:
      return state;
  }
};

interface Props {
  initialTodos?: Todo[];
}

export const Todos: React.FC<Props> = ({ initialTodos = [] }) => {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos });
  return (
    <div>
      {state.todos.map(todo => (
        <div key={todo.text}>{todo.text}</div>
      ))}

      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
};
