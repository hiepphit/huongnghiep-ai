import { createContext, useCallback, useState } from 'react';

const DEFAULT_USER = {
    username: 'Demo',
    avatar: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
};



export const UserContext = createContext( {
  user: DEFAULT_USER,
  updateUser: () => {},
});

export function useUserContext() {
  const [user, setUser] = useState(DEFAULT_USER);
  const updateUser = useCallback((data) => {
    setUser(data);
  }, []);


  return {
    user,
    updateUser
  };
}
