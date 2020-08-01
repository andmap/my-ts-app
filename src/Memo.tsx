import React, { useMemo } from "react";

const Memo = () => {
  console.log("render meo");

  return <div>memo</div>;
};

export default React.memo(Memo);
