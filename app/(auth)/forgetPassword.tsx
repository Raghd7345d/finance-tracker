import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Typo } from "@/components/Typo";
import { colors, radius, spacingx, spacingy } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import * as Icons from "phosphor-react-native";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { useAuth } from "@/context/authContext";

export default function ForgetPassword() {
  const { resetPassword } = useAuth();
  const router = useRouter();
  const emailRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);

  async function handleResetPassword() {
    if (!emailRef.current) {
      Alert.alert("Reset Password", "Please fill in the email field.");
      return;
    }

    setIsLoading(true);
    const res = await resetPassword(emailRef.current);
    setIsLoading(false);

    if (res.success) {
      setShowResend(true);
      Alert.alert(
        "Reset Email Sent",
        "If this email is registered, a password reset link has been sent. Please check your inbox."
      );
    } else {
      Alert.alert(
        "Error",
        res.msg || "Something went wrong. Please try again."
      );
    }

    console.log("Reset Password Response:", res);
  }

  return (
    <ScreenWrapper>
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
            Forget Password
          </Typo>
          <Typo
            style={{
              marginTop: verticalScale(7),
              fontSize: verticalScale(16),
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Lost Your Password? Even GOATs Forget Sometimes...🐐
          </Typo>
        </Animated.View>

        <View style={[styles.formContainer, { flexGrow: 1 }]}>
          <Animated.View
            entering={FadeInUp.duration(1000).springify().damping(10)}
            style={styles.content}
          >
            <Typo>Enter your email to receive a password reset link:</Typo>

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

            <Button
              style={{ justifyContent: "center" }}
              loading={isLoading}
              onPress={handleResetPassword}
            >
              <Typo
                size={verticalScale(14)}
                fontWeight={"700"}
                color={colors.basic.white}
              >
                Send Reset Email
              </Typo>
            </Button>

            {showResend && (
              <Pressable onPress={handleResetPassword}>
                <Typo
                  style={{
                    color: colors.border.focus,
                    marginTop: spacingy._10,
                    textAlign: "center",
                  }}
                >
                  Didn't receive the email? Tap here to resend.
                </Typo>
              </Pressable>
            )}
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingx._30,
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
});
