import React, { createContext, useState, useEffect } from "react";
import { auth, provider } from "../auth/firebase/auth";
import { signInWithPopup } from "firebase/auth";

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
  useEffect(() => {
    let userLocal = localStorage.getItem("name");
    setUser(userLocal);
  }, [user]);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        // setUser(result.user.displayName);
        // pass the data to local storage
        localStorage.setItem("name", result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, setUser, user, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
