import { SPACING } from "@/components/constants";
import { getDetailSharedElements } from "@/utils/getDetailSharedElements";
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
import { SharedElement } from "react-navigation-shared-element";
function RecipeDetails({ navigation, route }) {
  const { item } = route.params;
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
        onPress={()=>{navigation.goBack('Recipes', { item })}}
      ></AntDesign>
      <View style={[StyleSheet.absoluteFillObject]}>
        <SharedElement
          id={`item.${item.id}.photo`}
          style={[StyleSheet.absoluteFillObject]}
        >
          <View style={[StyleSheet.absoluteFillObject]}>
            <Image
              source={{ uri: item.image_url }}
              style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
            ></Image>
          </View>
        </SharedElement>
        <SharedElement id={`item.${item.id}.name`}
          style={[StyleSheet.absoluteFillObject]}>
          <Text style={[styles.foodItem]}>{item.name}</Text>
        </SharedElement>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  foodItem: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: SPACING,
    paddingVertical: 10,
    position: "absolute",
    top: 70,
    left: SPACING * 2,
    zIndex: 2,
  },
});

RecipeDetails.sharedElements = getDetailSharedElements;

export default RecipeDetails
