import { ActivityIndicator, Pressable, View } from "react-native";
import { ArrowRight } from "lucide-react-native";

import AppText from "@/components/ui/AppText";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function PrimaryButton({
  label,
  onPress,
  loading = false,
  disabled = false,
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      style={({ pressed }) => ({
        height: 56,
        borderRadius: 28,
        backgroundColor: "#F97316",
        alignItems: "center",
        justifyContent: "center",
        opacity: isDisabled ? 0.6 : pressed ? 0.85 : 1,
        shadowColor: "#F97316",
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,
      })}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <AppText weight="semibold" style={{ color: "#FFFFFF", fontSize: 17 }}>
            {label}
          </AppText>
          <ArrowRight color="#FFFFFF" size={20} strokeWidth={2.2} />
        </View>
      )}
    </Pressable>
  );
}
