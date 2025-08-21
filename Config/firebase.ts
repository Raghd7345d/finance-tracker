import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Deine Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyCGD2gzOtnNRlh7tK62xPnKWO_vHDg8y98",
  authDomain: "finanz-tracker-8a2ba.firebaseapp.com",
  projectId: "finanz-tracker-8a2ba",
  storageBucket: "finanz-tracker-8a2ba.appspot.com", // 🔧 kleiner Fix: ".app" → ".appspot.com"
  messagingSenderId: "666563988536",
  appId: "1:666563988536:web:7a7e4add3f75c3d8d8eacd",
  measurementId: "G-Y143ZH24HZ",
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Auth mit AsyncStorage initialisieren (für persistente Sessions in React Native)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
