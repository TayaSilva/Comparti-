import { View } from "react-native";

import AppText from "@/components/ui/AppText";

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
      <AppText>Badge</AppText>
    </View>
  );
}
