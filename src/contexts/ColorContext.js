import React, { createContext } from "react";
import seedColor from "../seedColor";
export const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={{ ...seedColor[3] }}>
      {children}
    </ColorContext.Provider>
  );
};
