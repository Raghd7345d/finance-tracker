import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Typo } from "@/components/Typo";
import { auth } from "@/Config/firebase";
import { colors } from "@/constants/theme";
import { useAuth } from "@/context/authContext";
import { signOut } from "firebase/auth";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function home() {
  const { user } = useAuth();
  async function handlePress() {
    await signOut(auth);
  }
  return (
    <ScreenWrapper style={{ backgroundColor: colors.background.veryLightGray }}>
      <Text> textInComponent </Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
