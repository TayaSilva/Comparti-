import { View, type ViewProps } from "react-native";

import AppText from "@/components/ui/AppText";

type BadgeProps = ViewProps & {
  label?: string;
};

export default function Badge({ label = "Badge", ...props }: BadgeProps) {
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: "#e7dcc8",
      }}
      {...props}
    >
      <AppText style={{ fontSize: 12, fontWeight: "500" }}>{label}</AppText>
    </View>
  );
}
