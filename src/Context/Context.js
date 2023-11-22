import React, { createContext, useState } from "react";
export const Name = createContext();

function Context({ children }) {
  const [name, setName] = useState("World");
  return <Name.Provider value={{ name, setName }}>{children}</Name.Provider>;
}

export default Context;
