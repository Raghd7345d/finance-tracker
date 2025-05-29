import MyTabBar from "@/components/CustomTabs";
import { Tabs } from "expo-router";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function _layout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="statistics"
        options={{
          title: "statistics",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
