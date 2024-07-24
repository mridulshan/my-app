import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { ThemedView } from "@/components/ThemedView/ThemedView.component";
import { ThemedText } from "@/components/ThemedText/ThemedText.component";

const Card = ({ title, height }: any) => {
  return (
    <View style={styles.bodyContainer}>
      <View style={{ flex: 1 }}>
        <ThemedText
          style={{
            marginLeft: 4,
          }}
          type="subtitle"
        >
          {title}
        </ThemedText>
        <View
          style={{
            backgroundColor: "#ccc4",
            marginTop: 6,
            borderRadius: 10,
            height,
            width: "auto",
          }}
        ></View>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <ThemedView
      style={{
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <View style={styles.titleContainer}>
        <ThemedText type="title">Sprout</ThemedText>
        <ThemedText type="subtitleBold">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </ThemedText>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        indicatorStyle={"white"}
        style={{ flex: 1 }}
      >
        <Card title={"Today"} height={120 * 2}></Card>
        <Card title={"This week"} height={120}></Card>
        <Card title={"Friends"} height={120 * 1.5}></Card>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 80,
  },
  bodyContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});
