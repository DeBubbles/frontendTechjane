
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  username: string | null;
  isAdmin: boolean;
  login: (username: string, isAdmin: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const login = (user: string, admin: boolean) => {
    setUsername(user);
    setIsAdmin(admin);
  };

  const logout = () => {
    setUsername(null);
    setIsAdmin(false);
  };

  const value = { username, isAdmin, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
