import { createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

const getAuthCookie = () => {
  const authCookie = Cookies.get("auth");
  if (authCookie) {
    return authCookie;
  } else {
    return null;
  }
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getAuthCookie());
  function setAuthData(data) {
    console.log(data);
    setAuth(data);
    Cookies.set("auth", data);
  }
  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

// export function useAuth() {
//   const [auth, setAuthData] = useContext(AuthContext);

//   return { auth, setAuthData };
// }
