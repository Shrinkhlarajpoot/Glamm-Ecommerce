import { createContext, useContext, useEffect, useState } from "react";
const Authcontext= createContext();
const useAuth = () => useContext(Authcontext);
const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("glamm-token" || "");
  const user =JSON.parse(localStorage.getItem("glamm-user" ||""))
  const isAuth = localStorage.getItem("isAuth" || "")
  const [auth, setAuth] = useState({ token:token, isAuth: false });
  const [showpassword, setShowPassword] = useState(false);
 useEffect(() => {
    if (token) {
      setAuth({ token, isAuth: true, user });
    } 
    else {
      setAuth({ token: "", isAuth: false, user:"" });
    }
  }, [auth.token]);

  return (
    <Authcontext.Provider
      value={{ auth, setAuth, showpassword, setShowPassword }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export { useAuth, AuthProvider };
