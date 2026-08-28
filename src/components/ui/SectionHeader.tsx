import { Pressable, View } from "react-native";

import AppText from "@/components/ui/AppText";

type SectionHeaderProps = {
  actionLabel?: string;
  onActionPress?: () => void;
  title?: string;
};

export default function SectionHeader({
  actionLabel,
  onActionPress,
  title = "Secao",
}: SectionHeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <AppText weight="bold" style={{ fontSize: 22, color: "#12304A" }}>
        {title}
      </AppText>

      {actionLabel ? (
        <Pressable accessibilityRole="button" onPress={onActionPress}>
          <AppText weight="bold" style={{ fontSize: 16, color: "#F97316" }}>
            {actionLabel}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}
