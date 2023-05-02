/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const login = (user) => setUser(user)
  const logout = () => setUser(null);

  return (
    <AuthContext.provider value={{ user, login, logout }}>
      { children }
    </AuthContext.provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);