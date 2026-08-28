import { View } from "react-native";

import AppText from "@/components/ui/AppText";

export default function RequestCard() {
  return (
    <View
      style={{
        padding: 16,
        borderRadius: 18,
        backgroundColor: "#fff",
      }}
    >
      <AppText>Pedido</AppText>
    </View>
  );
}
