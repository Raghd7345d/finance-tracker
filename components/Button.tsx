import { radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import Loading from "./Loading";
import { CustomButtonProps } from "@/types";

export default function Button({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) {
  if (loading) {
    return (
      <TouchableOpacity
        style={[styles.button, style, { backgroundColor: "transparent" }]}
        disabled
      >
        <Loading />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: radius._25,
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(52),
    // Improved shadow properties
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 13, // Increased shadow height for better visibility
    },
    shadowOpacity: 0.3, // Slightly increased opacity
    shadowRadius: 4.65, // Added shadow radius
    elevation: 8, // Add elevation for Android shadow
  },
});
