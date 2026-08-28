import { View } from "react-native";

import Badge from "@/components/ui/Badge";
import AppText from "@/components/ui/AppText";

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
      <AppText weight="semibold" style={{ fontSize: 16 }}>
        Item
      </AppText>
    </View>
  );
}
