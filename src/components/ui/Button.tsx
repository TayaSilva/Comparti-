import { Pressable, Text } from "react-native";

export default function Button() {
  return (
    <Pressable
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 14,
        backgroundColor: "#d97706",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "600" }}>Button</Text>
    </Pressable>
  );
}
