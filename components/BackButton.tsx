import { router, useRouter } from "expo-router";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { BackButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import { colors, radius, spacingx } from "@/constants/theme";

export default function BackButton({ style, iconSize = 26 }: BackButtonProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <CaretLeft size={verticalScale(iconSize)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.border.focus,
    borderRadius: radius._15,
    borderCurve: "continuous",
    justifyContent: "flex-start",
    padding: 5,
  },
});
