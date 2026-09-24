import { View, type ViewProps } from "react-native";

import AppText from "@/components/ui/AppText";

type BadgeProps = ViewProps & {
  label?: string;
  textColor?: string;
};

export default function Badge({
  label = "Badge",
  textColor = "#0B2B66",
  ...props
}: BadgeProps) {
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
      <AppText
        weight="semibold"
        style={{ fontSize: 12, color: textColor }}
      >
        {label}
      </AppText>
    </View>
  );
}
