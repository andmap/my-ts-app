import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import TextInput from "./TextInput";
import { Todos } from "./Todos";
import { Counter } from "./Counter";
import { Chats } from "./Chats";
import { Hello } from "./Hello";
const App = () => {
  return (
    <div className="App">
      <Hello />
      <Counter initialCount={0} />
      <Todos initialTodos={[{ text: "first", completed: false }]} />
      <Chats>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        )}
      </Chats>
    </div>
  );
};

export default App;
