import ScreenWrapper from "@/components/ScreenWrapper";
import { colors } from "@/constants/theme";
import React, { Component } from "react";
import { Text, View } from "react-native";

export default function profile() {
  return (
    <ScreenWrapper style={{ backgroundColor: colors.background.veryLightGray }}>
      <Text> textInComponent </Text>
    </ScreenWrapper>
  );
}
