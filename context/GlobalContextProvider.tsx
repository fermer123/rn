import React, {createContext, useContext, useEffect, useState} from 'react';

interface IGlobalContextProvider {}
const GlobalContext = createContext<IGlobalContextProvider | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
