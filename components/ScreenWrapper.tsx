import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import React, { Component } from "react";
import { Dimensions, Platform, StatusBar, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export default function ScreenWrapper({ style, children }: ScreenWrapperProps) {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 50;
  return (
    <LinearGradient
      colors={["#99d98c", "#a9def9"]} // bright green to bright blue
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        {
          flex: 1,
        },
        style,
      ]}
    >
      <View style={{ paddingTop, flex: 1, backgroundColor: "transparent" }}>
        <StatusBar barStyle="light-content" />
        {children}
      </View>
    </LinearGradient>
  );
}
