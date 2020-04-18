import React, { useEffect, useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
// import TextInput from "./TextInput";
import { Todos } from "./Todos";
import { Counter } from "./Counter";
import { Chats } from "./Chats";
import { Hello } from "./Hello";
import { Forms } from "./Forms";
import Memo from "./Memo";
const App = () => {
  const array = useMemo(() => {
    return ["one", "2"];
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={(e) => setCount(count + 1)}></button>
      <Memo array={array} />
      <h1>{count}</h1>
      <Forms />
      <Hello />
      <Counter initialCount={0} />
      <Todos initialTodos={[{ text: "first - 001", completed: false }]} />
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
