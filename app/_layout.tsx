import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Animated, useColorScheme, View } from "react-native";
import { useFonts } from "expo-font";
import {
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { Colors, DarkTheme } from "@/constants/Colors";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";
import { getDetailSharedElements } from "@/utils/getDetailSharedElements";

export default function RootLayout() {
  const Stack = createSharedElementStackNavigator();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-light": require("../assets/fonts/Outfit-Light.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.preventAutoHideAsync();
  //   }
  // }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        key="Recipes"
        name="Recipes"
        component={Recipes}
      />
      <Stack.Screen
        key="RecipeDetails"
        name="RecipeDetails"
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
}
