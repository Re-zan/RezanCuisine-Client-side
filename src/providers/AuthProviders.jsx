import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../utilities/firebase/firebaseConfig";

export const AuthContext = createContext(null);
//auth app
const auth = getAuth(app);

//providers
const GooglePovider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();
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
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    signInWithPopup(auth, GooglePovider);
  };

  const githubLogin = () => {
    signInWithPopup(auth, Githubprovider);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    register,
    profile,
    login,
    googleLogin,
    githubLogin,
    logOut,
    loader,
    resetPass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
