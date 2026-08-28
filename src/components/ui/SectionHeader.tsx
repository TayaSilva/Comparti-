import { Pressable, Text, View } from "react-native";

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
      <Text style={{ fontSize: 22, fontWeight: "700", color: "#12304A" }}>{title}</Text>

      {actionLabel ? (
        <Pressable accessibilityRole="button" onPress={onActionPress}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#F97316" }}>
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}
