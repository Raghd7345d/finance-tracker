// transactionService.ts
import { firestore } from "@/Config/firebase";
import { Transaction } from "@/types";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveTransaction(
  transaction: Omit<Transaction, "timestamp">
): Promise<void> {
  try {
    const docRef = await addDoc(collection(firestore, "transactions"), {
      ...transaction,
      timestamp: Timestamp.now(),
    });
    console.log("Transaction saved with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
}
