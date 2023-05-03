import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../utilities/firebase/firebaseConfig";

export const AuthContext = createContext(null);
//auth app
const auth = getAuth(app);

//providers
const GooglePovider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  //states
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const profile = (userProfile, name, photo) => {
    setLoader(true);
    updateProfile(userProfile, {
      displayName: name,
      photoURL: photo,
    });
  };
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //observed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   const logOut = () => {
  //     setLoader(true);
  //     signOut(auth);
  //   };

  const googleLogin = () => {
    signInWithPopup(auth, GooglePovider);
  };

  const authInfo = {
    user,
    register,
    profile,
    login,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
