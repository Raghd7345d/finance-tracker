import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, Text, View, TextStyle } from "react-native";

export function Typo({
  size,
  color,
  fontFamily,
  fontWeight = "400",
  lineHeight,
  children,
  textprops = {},
  style,
}: TypoProps) {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : 16,
    color,
    fontFamily,
    fontWeight,
    lineHeight,
  };

  return (
    <Text style={[textStyle, style]} {...textprops}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({});
