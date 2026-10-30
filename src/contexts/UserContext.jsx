import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('arseniq_user');
    return saved ? JSON.parse(saved) : { 
      name: 'Demo Collector', 
      email: 'collector@demo.com', 
      joined: new Date().toISOString().split('T')[0] 
    };
  });

  useEffect(() => {
    localStorage.setItem('arseniq_user', JSON.stringify(user));
  }, [user]);

  const updateUser = (data) => setUser({ ...user, ...data });
  
  const resetUser = () => setUser({ 
    name: 'Demo Collector', 
    email: 'collector@demo.com', 
    joined: new Date().toISOString().split('T')[0] 
  });

  return (
    <UserContext.Provider value={{ user, updateUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);