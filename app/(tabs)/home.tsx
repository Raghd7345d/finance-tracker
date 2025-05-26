import Button from "@/components/Button";
import { Typo } from "@/components/Typo";
import { auth } from "@/Config/firbase";
import { useAuth } from "@/context/authContext";
import { signOut } from "firebase/auth";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function home() {
  const { user } = useAuth();
  console.log("User in Home:", user);
  async function handlePress() {
    await signOut(auth);
  }
  return (
    <View>
      <Text> textInComponent </Text>
      <Button onPress={() => handlePress()}>
        <Typo style={{ color: "white" }}>kiss me</Typo>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
