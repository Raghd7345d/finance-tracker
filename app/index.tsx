import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

// Emerto comments on this

export default function HomeScreen() {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/(auth)/welcome");
  //   }, 2000);
  // }, []);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/saveMoney.png")}
          resizeMode="contain"
          accessibilityLabel="Save Money Illustration"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
