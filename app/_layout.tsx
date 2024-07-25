import { SplashScreen, Tabs } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Animated, useColorScheme, View } from "react-native";
import { useFonts } from "expo-font";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Colors, DarkTheme } from "@/constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-light": require("../assets/fonts/Outfit-Light.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.preventAutoHideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor:
              Colors[colorScheme ?? "light"].tabIconSelected,
            tabBarInactiveTintColor:
              Colors[colorScheme ?? "light"].tabIconDefault,
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Today",
              tabBarIcon: ({ color, focused }) => {
                console.log("Color", color);

                return (
                  <TabBarIcon
                    name={focused ? "home" : "home-outline"}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tabs.Screen
            name="nourish"
            initialParams={{
              title: "Nourish",
              subtitle: "Explore recipes",
            }}
            options={{
              headerStatusBarHeight: 0,
              headerTitle: "",
              headerShown: true,
              title: "Nourish",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "water" : "water-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Explore",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "fast-food" : "fast-food-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="report"
            options={{
              title: "Report",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "clipboard" : "clipboard-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="loading"
            options={{
              title: "Seed",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "person-circle" : "person-circle-outline"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </View>
    </ThemeProvider>
  );
}
