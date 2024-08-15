import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated, "isAuthenticated");

  const [isAuthUser, setIsAuthUser] = useState(
    JSON.parse(localStorage.getItem("isAuthUser")) || null
  );

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthUser", JSON.stringify(true));
      setIsAuthUser(true);
    } else {
      localStorage.setItem("isAuthUser", JSON.stringify(false));
      setIsAuthUser(false);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, isAuthUser, setIsAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
