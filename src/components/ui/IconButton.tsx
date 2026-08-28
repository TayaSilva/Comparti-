import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type IconButtonProps = {
  accessibilityLabel?: string;
  badgeCount?: number;
  children: ReactNode;
  onPress?: () => void;
};

export default function IconButton({
  accessibilityLabel,
  badgeCount,
  children,
  onPress,
}: IconButtonProps) {
  const hasBadge = typeof badgeCount === "number" && badgeCount > 0;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      
        position: "relative",
      }}
    >
      {children}
      {hasBadge ? (
        <View
          style={{
            minWidth: 18,
            height: 18,
            borderRadius: 9,
            paddingHorizontal: 4,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F97316",
            borderWidth: 2,
            borderColor: "#F1F5F9",
            position: "absolute",
            top: -2,
            right: -2,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            {badgeCount}
          </Text>
        </View>
      ) : null}
    </Pressable>
  );
}
