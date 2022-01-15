import React, { createContext, useContext, useReducer } from "react";

export const GlobalContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useStateValue = () => useContext(GlobalContext);
