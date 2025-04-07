// GlobalState.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [promptMsg, setPromptMsg] = useState(''); // state global

  return (
    <GlobalContext.Provider value={{ promptMsg, setPromptMsg }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);