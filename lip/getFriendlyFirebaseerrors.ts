import { firebaseErrorMessages } from "./firebaseErrors";

export function getFriendlyFirebaseErrors(code: string): string {
  return (
    firebaseErrorMessages[code] ||
    "An unexpected error occurred. Please try again."
  );
}
