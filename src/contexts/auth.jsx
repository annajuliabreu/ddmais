import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState(() => {
      const userToken = localStorage.getItem("user_token");
      if (userToken) return userToken

      return null
    })
    const navigate = useNavigate()
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);

      const login = async ({ email, password }) => {
        const { data: { token: userToken } } = await api.post('/auth/signin', { email, password })
    
        if (userToken) {
          localStorage.setItem("user_token", userToken);
          setToken(userToken)
          setUser({ email });
          navigate('/logged')
        } else {
          return "E-mail ou senha incorretos";
        }
      };
    
      const logout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
      };
    

    return <AuthContext.Provider
    value={{ user, logged: !!token, login, logout }}
    >{ children }</AuthContext.Provider>
}