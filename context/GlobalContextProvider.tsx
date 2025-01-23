import {getCurrentUser} from '@/lib/appwrite';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface IGlobalContextProvider {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: unknown;
  setUser: Dispatch<unknown>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const GlobalContext = createContext<IGlobalContextProvider | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      ?.then((res) => {
        console.log('res', res);
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
      isLoading,
      setIsLoading,
    }),
    [],
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
