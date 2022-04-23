import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAAhav59Y_kS6XhNrGVCSf55b5sL_VyUcQ",
  authDomain: "idevtask--auth.firebaseapp.com",
  projectId: "idevtask--auth",
  storageBucket: "idevtask--auth.appspot.com",
  messagingSenderId: "37200000588",
  appId: "1:37200000588:web:ea4fabc09c23c8d686e6e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
