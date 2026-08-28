import { Text, View } from "react-native";

import Badge from "@/components/ui/Badge";

export default function ItemCard() {
  return (
    <View
      style={{
        gap: 10,
        padding: 16,
        borderRadius: 18,
        backgroundColor: "#fff",
      }}
    >
      <Badge />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>Item</Text>
    </View>
  );
}
