import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // useEffect(() => {
  //   // Set the default Authorization header when the auth.token changes
  //   axios.defaults.headers.common["Authorization"] = auth?.token || "";
  // }, [auth.token]);
  
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      // console.log(parseData.token)
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token
      });
    }
    // console.log(auth.token)
    axios.defaults.headers.common["authorization"] = auth.token
  }, [auth.token]);


  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };