import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => void;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField: React.FC<Props> = ({ i, handleChange }) => {
  const [count, setCount] = useState<
    { text: string } | null | undefined | string
  >({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
