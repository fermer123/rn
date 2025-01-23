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
import {Models} from 'react-native-appwrite';

interface IGlobalContextProvider {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: Models.Document | null;
  setUser: Dispatch<Models.Document | null>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<IGlobalContextProvider>({
  isLoading: false,
  isLoggedIn: false,
  setIsLoading: () => {},
  setIsLoggedIn: () => {},
  setUser: () => {},
  user: null,
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<Models.Document | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      ?.then((res) => {
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
  }, [getCurrentUser, setIsLoggedIn, setUser]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
      isLoading,
      setIsLoading,
    }),
    [isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading],
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
