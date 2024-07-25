import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
  Animated,
  StatusBar,
} from "react-native";
import data from "../data.json";
import { ThemedView } from "@/components/ThemedView/ThemedView.component";
import { ThemedText } from "@/components/ThemedText/ThemedText.component";
import { listConfig } from "../constants";
import { router } from "expo-router";
import { SharedTransition } from "react-native-reanimated";
const { HEIGHT, WIDTH, RADIUS, SPACING, FULL_SIZE } = listConfig;
export default function Recipes() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        horizontal
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        data={data.recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [WIDTH, 0, -WIDTH],
          });
          const scale = scrollX.interpolate({
            inputRange,
            // outputRange: [0.8, 1, 0.8],
            outputRange: [1, 1.2, 1],
          });
          return (
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "RecipeDetails",
                  params: { ...item },
                });
              }}
              style={styles.itemContainer}
            >
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { overflow: "hidden", borderRadius: RADIUS },
                ]}
              >
                <Animated.Image
                  source={{ uri: item.image_url }}
                  style={[
                    StyleSheet.absoluteFillObject,
                    { resizeMode: "cover", transform: [{ scale }] },
                  ]}
                ></Animated.Image>
              </View>
              <Animated.Text
                style={[styles.foodItem, { transform: [{ translateX }] }]}
              >
                {item.name}
              </Animated.Text>
              <View style={styles.caloriesContainer}>
                <ThemedText style={styles.calories} type="subtitle">
                  {item.estimated_calories}
                </ThemedText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: {
    width: WIDTH,
    height: HEIGHT,
    margin: SPACING,
  },
  foodItem: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
    lineHeight: 30,
    width: WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING,
    left: SPACING,
  },
  caloriesContainer: {
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 25,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  calories: { fontWeight: "800", fontSize: 18, color: "#fff" },
});
