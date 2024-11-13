import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
