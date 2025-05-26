import { colors } from "@/constants/theme";
import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

export default function Loading({
  size = "large",
  color = colors.font.muted,
}: ActivityIndicatorProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
