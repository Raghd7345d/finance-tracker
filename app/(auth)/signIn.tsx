import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

import { useAuth } from "@/context/authContext";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Typo } from "@/components/Typo";
import { colors, radius, spacingx, spacingy } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

export default function SignIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit() {
    const email = emailRef.current;
    const password = passwordRef.current;

    if (!email || !password) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await signIn(email, password);

      if (!response.success) {
        Alert.alert("Login Failed", response.msg || "Please try again.");
      }

      // ✅ No navigation here — AuthContext will handle it
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScreenWrapper style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <BackButton />
        </View>

        <Animated.View
          entering={FadeIn.duration(1000)}
          style={{
            flex: 1,
            alignItems: "center",
            gap: spacingy._20,
          }}
        >
          <Typo
            style={{
              fontSize: verticalScale(40),
              fontWeight: "bold",
            }}
          >
            Sign In
          </Typo>
          <Typo
            style={{
              marginTop: verticalScale(7),
              fontSize: verticalScale(16),
              textAlign: "center",
            }}
          >
            The GOAT returns! Let’s count your coins
          </Typo>
        </Animated.View>

        <View style={[styles.formContainer, { flexGrow: 1 }]}>
          <Animated.View
            entering={FadeInUp.duration(1000).springify().damping(10)}
            style={styles.content}
          >
            <Typo>Please enter login details below :</Typo>

            <Input
              placeholder="Enter your email"
              onChangeText={(value) => (emailRef.current = value)}
              icon={
                <Icons.At
                  size={verticalScale(26)}
                  color={colors.icon.DEFAULT}
                />
              }
            />

            <Input
              onChangeText={(value) => (passwordRef.current = value)}
              placeholder="Enter your password"
              icon={
                <Icons.Lock
                  size={verticalScale(26)}
                  color={colors.icon.DEFAULT}
                />
              }
              secureTextEntry={true}
            />

            <Pressable onPress={() => router.push("/(auth)/forgetPassword")}>
              <Typo
                style={{ alignSelf: "flex-end", color: colors.border.focus }}
              >
                Forget Password?
              </Typo>
            </Pressable>

            <Button
              loading={isLoading}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              <Typo
                size={verticalScale(14)}
                fontWeight={"700"}
                color={colors.basic.white}
              >
                Sign In
              </Typo>
            </Button>

            <Animated.View
              entering={FadeInDown.duration(1500).springify().damping(10)}
              style={styles.footer}
            >
              <Typo>Don't have an account?</Typo>
              <Pressable onPress={() => router.push("/(auth)/register")}>
                <Typo style={{ color: colors.border.focus, fontWeight: "700" }}>
                  Sign Up
                </Typo>
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingy._30,
    paddingHorizontal: spacingx._5,
  },
  formContainer: {
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: radius._25,
    gap: spacingy._10,
    paddingHorizontal: spacingx._5,
    paddingTop: spacingy._35,
    shadowColor: "#000",
  },
  content: {
    flexDirection: "column",
    gap: spacingy._20,
    paddingHorizontal: spacingx._20,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
});
