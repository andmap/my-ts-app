import React, { useEffect, useState, useMemo, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
// import TextInput from "./TextInput";
import { Todos } from "./Todos";
import { Counter } from "./Counter";
import { Chats } from "./Chats";
import { Hello } from "./Hello";
import { Forms } from "./Forms";
import {
  hasPairWithSum,
  fibonacciBottomUp,
  reconciliation,
} from "./utils/helpers";
import Memo from "./Memo";
const App = () => {
  const data1 = [5.1, 1, 1.1, 2.3, 3.0, 5.2, 5.1, 3.0];
  const data2 = [1.1, 3.0, 5.1, 3.1, 5.1, 8.1];

  const array = useMemo(() => {
    return ["one", "2"];
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={(e) => setCount(count + 1)}></button>

      <h1>{count}</h1>
      <h1>
        sum: {hasPairWithSum([1, 2, 4, 4], 8) === true ? "true" : "false"}
      </h1>
      <h1>
        sum: {hasPairWithSum([1, 2, 3, 9], 8) === true ? "true" : "false"}
      </h1>
      <h1>fibonacciBottomUp(6): {fibonacciBottomUp(6)}</h1>
      <h1>fibonacciBottomUp(20): {fibonacciBottomUp(20)}</h1>
      <h1>
        reconciliation( <br />
        {data1.toString()},<br />
        {data2.toString()})
      </h1>
      <div>{reconciliation(data1, data2).toString()}</div>
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
