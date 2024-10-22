import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

// custom hook to use the AppContext in any component without prop drilling
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
