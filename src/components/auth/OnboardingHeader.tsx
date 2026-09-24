import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import { ChevronLeft } from "lucide-react-native";

const logoCompleta = require("../../../assets/images/logos/logo-completa-colorido.png");

type OnboardingHeaderProps = {
  onBackPress?: () => void;
};

export default function OnboardingHeader({ onBackPress }: OnboardingHeaderProps) {
  return (
    <View
      style={{
        height: 56,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {onBackPress ? (
        <Pressable
          onPress={onBackPress}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          hitSlop={12}
          style={{ position: "absolute", left: 16, padding: 4 }}
        >
          <ChevronLeft color="#0B2B66" size={24} strokeWidth={2.2} />
        </Pressable>
      ) : null}
      <Image
        source={logoCompleta}
        contentFit="contain"
        style={{ width: 110, height: 36 }}
      />
    </View>
  );
}
