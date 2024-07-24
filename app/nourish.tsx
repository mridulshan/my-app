import { ThemedText } from "@/components/ThemedText/ThemedText.component";
import { ThemedView } from "@/components/ThemedView/ThemedView.component";
import { Image, Text, View } from "react-native";

export default function Nourish() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText style={{ fontFamily: "outfit" }}>Nourish</ThemedText>
    </ThemedView>
  );
}
