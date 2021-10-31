import React, { useEffect, useState } from "react";
import initializefirebase from "../Firebase/firebaseinit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializefirebase();
const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isloading,setIsloading] = useState(true)
  const signinUsingGoogle = () => {
   return signInWithPopup(auth, provider)
      
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setIsloading(false)
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        const uid = user.uid;
      } else {
      }
      setIsloading(false)
    });
  }, []);

  return {
    signinUsingGoogle,
    user,
    setUser,
    error,
    handleLogout,
    isloading,setIsloading
  };
};

export default useFirebase;
