import { Image, Text, View } from "react-native";

export default function Loading({ children }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EAF3D6",
      }}
    >
      <Image
        style={{ height: 180, width: 120 }}
        source={require("../../assets/images/plant.png")}
      />
      <Text style={{ fontFamily: "outfit" }}>{children}</Text>
    </View>
  );
}
