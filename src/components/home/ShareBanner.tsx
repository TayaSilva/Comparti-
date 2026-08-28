import { View } from "react-native";

import AppText from "@/components/ui/AppText";
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
      <AppText weight="bold" style={{ fontSize: 20, color: "#fff" }}>
        ShareBanner
      </AppText>
      <Button />
    </View>
  );
}
