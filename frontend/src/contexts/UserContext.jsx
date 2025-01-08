import { createContext } from 'react';
import useUser from '../hooks/useUser';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, setUser, loading, error } = useUser();

  return (
    <UserContext.Provider value={{ user, setUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
