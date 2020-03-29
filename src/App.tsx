import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import TextInput from "./TextInput";
import { Todos } from "./Todos";
import { Counter } from "./Counter";
function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <Todos initialTodos={[{ text: "first", completed: false }]} />
    </div>
  );
}

export default App;
