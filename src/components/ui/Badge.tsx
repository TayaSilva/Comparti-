import { Text, View } from "react-native";

export default function Badge() {
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: "#e7dcc8",
      }}
    >
      <Text>Badge</Text>
    </View>
  );
}
