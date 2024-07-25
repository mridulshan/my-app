import { SPACING } from "@/components/constants";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
function RecipeDetails() {
  const item = useLocalSearchParams();
  console.log("Params", { item });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="#333"
        style={{
          paddingHorizontal: SPACING,
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
        onPress={router.back}
      ></AntDesign>
      <View style={[StyleSheet.absoluteFillObject]}>
        <Animated.Image
          fadeDuration={300}
          id={"imageee"}
          source={{ uri: item.image_url as string }}
          style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
        ></Animated.Image>
      </View>
    </SafeAreaView>
  );
}

RecipeDetails.sharedElements = (route: any) => {
  const item = useLocalSearchParams();
  console.log("slknakdask", { route });

  return [
    {
      id: `item.${item.id}.image`,
    },
  ];
};

export default RecipeDetails;
