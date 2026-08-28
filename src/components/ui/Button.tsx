import { Pressable } from "react-native";

import AppText from "@/components/ui/AppText";

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
      <AppText weight="semibold" style={{ color: "#fff" }}>
        Button
      </AppText>
    </Pressable>
  );
}
