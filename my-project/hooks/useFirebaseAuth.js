import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { app } from "../database/firebase";
import { clearCart } from "../utils/cartManager";

const auth = getAuth(app);

const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

//sign in method
  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
    } catch (error) {
      setError("username or password may wrong");
      setIsLoading(false);
    }
  };

  const signUp = async (email, password) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      //   Send email verification
      await sendEmailVerification(auth.currentUser);

      console.log("Verification email sent.");

      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setError("Try Again");
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      clearCart();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const changePassword = async (password) => {
    setIsLoading(true);
    try {
      await updatePassword(auth.currentUser, password);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const forgetPassword = async (email) => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password Reset Link Sent to you email");
      console.log("Reset email send");
    } catch (error) {
      console.log(error);
      setError("Try Again");
    }
  };

  return {
    user,
    isLoading,
    isSignedIn: Boolean(user),
    signIn,
    signUp,
    logOut,
    changePassword,
    forgetPassword,
    error,
    setError,
  };
};

export default useFirebaseAuth;
