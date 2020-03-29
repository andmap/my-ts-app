import React, { useState } from "react";

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}
// render props
export const Chats: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <div>{children({ count, setCount })}</div>;
};
