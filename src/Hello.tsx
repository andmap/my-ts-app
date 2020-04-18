import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
interface Props {}
const API = "http://numbersapi.com/";
export const Hello: React.FC<Props> = () => {
  const [number, setNumber] = useState("42");
  const apiURL = `${API}${number}`;
  const { data, loading } = useFetch(apiURL);
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, [number]);
  return (
    <div>
      <h1>{loading ? "loading..." : data}</h1>
      <input
        name="number"
        placeholder="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
    </div>
  );
};
