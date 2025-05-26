import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Typo } from "@/components/Typo";
import { colors, radius, spacingx, spacingy } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/authContext";
export default function SignUp() {
  const router = useRouter();
  const { signUp: SignupUser } = useAuth();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit() {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert("Signup", "Please fill all the fields");
      return;
    }
    if (!emailRef.current.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    const res = await SignupUser(
      emailRef.current,
      passwordRef.current,
      nameRef.current
    );

    setIsLoading(false);

    if (!res.success) {
      Alert.alert("Signup Error", res.msg || "An unexpected error occurred.");
      return;
    }

    // ✅ Show success and navigate back to sign-in
    Alert.alert(
      "Signup Successful",
      "A verification email has been sent. Please check your inbox and verify your email before logging in."
    );

    // ✅ Optionally navigate to login
    router.push("/(auth)/signIn");
  }

  return (
    <ScreenWrapper style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
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
            Sign Up
          </Typo>
          <Typo
            style={{
              marginTop: verticalScale(7),
              fontSize: verticalScale(16),
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            No kidding! it's time to goat serious about your money.
          </Typo>
        </Animated.View>
        {/* Increase flex space for formContainer */}
        <View style={[styles.formContainer, { flexGrow: 1 }]}>
          <Animated.View
            entering={FadeInUp.duration(1000).springify().damping(10)}
            style={styles.content}
          >
            <Typo>Please enter login details below </Typo>
            <Input
              onChangeText={(value) => (nameRef.current = value)}
              placeholder="Enter your name"
              icon={
                <Icons.User
                  size={verticalScale(26)}
                  color={colors.icon.DEFAULT}
                />
              }
            />
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
              secureTextEntry
              icon={
                <Icons.Lock
                  size={verticalScale(26)}
                  color={colors.icon.DEFAULT}
                />
              }
            />

            <Button loading={isLoading} onPress={handleSubmit}>
              <Typo
                size={verticalScale(14)}
                fontWeight={"700"}
                color={colors.basic.white}
              >
                Sign Up
              </Typo>
            </Button>

            <Animated.View
              entering={FadeInDown.duration(1500).springify().damping(10)}
              style={styles.footer}
            >
              <Typo>Already have an account?</Typo>

              <Pressable onPress={() => router.push("/(auth)/signIn")}>
                <Typo style={{ color: colors.border.focus, fontWeight: "700" }}>
                  Sign In
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
    flexGrow: 1, // Allow formContainer to take up more space
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
