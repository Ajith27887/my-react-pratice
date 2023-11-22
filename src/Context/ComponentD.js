import React, { useContext } from "react";
import { Name } from "./Context";

function ComponentD() {
  const { name, setName } = useContext(Name);
  return (
    <div>
      <h4>Hello {name}</h4>
      <button onClick={() => setName("React")}>Change</button>
    </div>
  );
}

export default ComponentD;
