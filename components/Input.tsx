import { colors, radius, spacingx } from "@/constants/theme";
import { InputProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input(props: InputProps) {
  return (
    <View
      style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon && props.icon}

      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={colors.border.DEFAULT}
        ref={props.inputRef && props.inputRef}
        {...props}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    height: verticalScale(52),
    alignItems: "center",
    borderColor: colors.border.DEFAULT,
    borderWidth: 1,
    borderRadius: radius._15,
    borderCurve: "continuous",
    paddingHorizontal: spacingx._10,
    justifyContent: "space-between",
    gap: spacingx._10,
  },
  input: {
    flex: 1,
    height: verticalScale(52),
    fontSize: verticalScale(14),
    color: colors.font.DEFAULT,
  },
});
