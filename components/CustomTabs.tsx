import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text as RNText,
  TouchableOpacity,
} from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, radius, spacingx } from "@/constants/theme";
import { scale, verticalScale } from "@/utils/styling";
import * as Icons from "phosphor-react-native";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const tabbarIcons: any = {
    home: (isFocused: boolean) => (
      <Icons.House
        size={24}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.primary.dark : colors.border.DEFAULT}
      />
    ),
    wallet: (isFocused: boolean) => (
      <Icons.Wallet
        size={24}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.primary.dark : colors.border.DEFAULT}
      />
    ),
    profile: (isFocused: boolean) => (
      <Icons.User
        size={24}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.primary.dark : colors.border.DEFAULT}
      />
    ),
    statistics: (isFocused: boolean) => (
      <Icons.ChartBar
        size={24}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.primary.dark : colors.border.DEFAULT}
      />
    ),
  };

  return (
    <View
      style={[styles.wrapper, { bottom: insets.bottom + verticalScale(10) }]}
    >
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label: any =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              {tabbarIcons[route.name] && tabbarIcons[route.name](isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: scale(spacingx._20),
    right: scale(spacingx._20),
    borderRadius: scale(radius._25),
    backgroundColor: "transparent",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(3) },
    shadowOpacity: 0.1,
    shadowRadius: scale(radius._25),
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: colors.basic.white,
    borderRadius: scale(radius._25),
    height: Platform.OS === "ios" ? verticalScale(73) : verticalScale(55),
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: scale(spacingx._25),
    borderWidth: 1,
    borderColor: colors.basic.lightGray,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: verticalScale(44), // Recommended touch area
    paddingVertical: verticalScale(6),
  },
});
