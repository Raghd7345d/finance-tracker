// lib/firebaseErrors.ts

export const firebaseErrorMessages: Record<string, string> = {
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-credential":
    "Invalid credentials. Please check your email and password.",
  "auth/too-many-requests": "Too many failed attempts. Please try again later.",
  "auth/missing-password": "Please enter your password.",
  "auth/network-request-failed":
    "Network error. Please check your internet connection.",
  // Add more as needed
};
