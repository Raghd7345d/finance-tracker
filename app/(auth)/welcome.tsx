import { colors, radius } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Typo } from "@/components/Typo";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";

export default function Page() {
  const router = useRouter();

  function handlePress() {
    router.push("/(auth)/signIn");
  }

  return (
    <ScreenWrapper style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/moneyHand.png")}
        style={styles.image}
        resizeMode="contain"
        entering={FadeIn.duration(1500)}
      />
      <View style={styles.card}>
        <Animated.View
          entering={FadeInDown.duration(3000).springify().damping(10)}
        >
          <Typo style={styles.text} size={33}>
            Hello, Welcome!
          </Typo>
          <Typo style={styles.text} size={33}>
            GoatRich
          </Typo>
          <Typo style={styles.description} size={15}>
            Stalk your cash.{"\n"}Spend like a ninja.{"\n"}Save like a squirrel.
          </Typo>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.duration(3000).springify().damping(10)}
          style={styles.button}
        >
          <Button style={styles.largeButton} onPress={handlePress}>
            <Typo style={styles.buttonText} size={20}>
              Get Started
            </Typo>
          </Button>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.background.light, // REMOVE THIS LINE
  },
  image: {
    height: "50%",
    aspectRatio: 1,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    flexGrow: 1,
    backgroundColor: "white",
    borderTopRightRadius: radius._30,
    borderTopLeftRadius: radius._30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  largeButton: {
    paddingHorizontal: 30, // Increase horizontal padding
    paddingVertical: 15, // Increase vertical padding
  },
});
