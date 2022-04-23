import React, { createContext, useState } from "react";
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAAhav59Y_kS6XhNrGVCSf55b5sL_VyUcQ",
  authDomain: "idevtask--auth.firebaseapp.com",
  projectId: "idevtask--auth",
  storageBucket: "idevtask--auth.appspot.com",
  messagingSenderId: "37200000588",
  appId: "1:37200000588:web:ea4fabc09c23c8d686e6e9",
};
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

// firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user.displayName);
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;

        // pass the user to a state(used for routing)
        // setUser(name);

        // console.log(user);
        // pass the data to local storage
        localStorage.setItem("name", result.user.displayName);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
