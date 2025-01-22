import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (rememberMe: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
