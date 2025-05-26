import { auth, firestore } from "@/Config/firbase";
import { getFriendlyFirebaseErrors } from "@/lip/getFriendlyFirebaseerrors";
import { AuthContextType, UserType } from "@/types";
import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User as FirebaseUser,
  sendEmailVerification,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();

  // SIGN IN
  const signIn = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response.user.emailVerified) {
        await auth.signOut();
        return {
          success: false,
          msg: "Please verify your email before logging in.",
        };
      }

      return { success: true };
    } catch (error: any) {
      const msg = getFriendlyFirebaseErrors(error.code);
      return { success: false, msg };
    }
  };

  // SIGN UP
  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = response.user.uid;

      await setDoc(doc(firestore, "users", uid), {
        uid,
        email,
        name,
        image: null,
      });

      await sendEmailVerification(response.user);
      await auth.signOut();

      return {
        success: true,
        msg: "Verification email sent. Please check your inbox before logging in.",
      };
    } catch (error: any) {
      const msg = getFriendlyFirebaseErrors(error.code);
      return { success: false, msg };
    }
  };

  // RESET PASSWORD
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return {
        success: true,
        msg: "If this email is registered, a reset link has been sent.",
      };
    } catch (error: any) {
      const msg = getFriendlyFirebaseErrors(error.code);
      return { success: false, msg };
    }
  };

  // GET USER DATA
  const updateUserData = async (uid: string) => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const userData: UserType = {
          uid: data.uid || null,
          email: data.email || null,
          name: data.name || null,
          image: data.image || null,
        };
        setUser({ ...userData });
      }
    } catch (error: any) {
      console.log("Error updating user data:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName || null,
        });
        updateUserData(firebaseUser.uid);
        if (firebaseUser.emailVerified) {
          router.replace("/(tabs)/home");
        }
      } else {
        setUser(null);
        router.replace("/(auth)/welcome");
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue: AuthContextType = {
    user,
    setUser,
    signIn,
    signUp,
    updateUserData,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
