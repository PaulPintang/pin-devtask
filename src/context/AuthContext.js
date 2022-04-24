import React, { createContext, useState, useEffect } from "react";
import { auth, provider } from "../auth/firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MSG_SENDER_ID,
//   appId: process.env.APP_ID,
// };

// context
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let userLocal = localStorage.getItem("name");
    let isAuth = localStorage.getItem("isAuth");
    setUser(userLocal);
    setIsAuth(isAuth);
  }, [isAuth]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        localStorage.setItem("name", result.user.displayName);
        localStorage.setItem("isAuth", true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, signOutUser, setUser, user, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
