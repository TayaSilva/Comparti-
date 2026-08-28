import { Image } from "expo-image";
import { Pressable, View } from "react-native";

import AppText from "@/components/ui/AppText";

type CategoryCardProps = {
  icon: number;
  label: string;
  onPress?: () => void;
};

export default function CategoryCard({ icon, label, onPress }: CategoryCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir categoria ${label}`}
      onPress={onPress}
      style={{
        alignItems: "center",
        gap: 6,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 32,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EFF6FF",
        }}
      >
        <Image
          source={icon}
          contentFit="contain"
          transition={150}
          style={{ width: 34, height: 34 }}
        />
      </View>

      <AppText
        weight="bold"
        numberOfLines={1}
        style={{
          fontSize: 12,
          color: "#334155",
          textAlign: "center",
        }}
      >
        {label}
      </AppText>
    </Pressable>
  );
}
