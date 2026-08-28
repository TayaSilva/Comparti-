import { Text, View } from "react-native";

import Button from "@/components/ui/Button";

export default function ShareBanner() {
  return (
    <View
      style={{
        gap: 12,
        padding: 20,
        borderRadius: 22,
        backgroundColor: "#f59e0b",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
        ShareBanner
      </Text>
      <Button />
    </View>
  );
}
