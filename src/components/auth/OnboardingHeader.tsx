import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import { ArrowLeft } from "lucide-react-native";

const logoCompleta = require("../../../assets/images/logos/logo-completa-colorido.png");

type OnboardingHeaderProps = {
  showBackButton?: boolean;
  onBackPress?: () => void;
};

export default function OnboardingHeader({
  showBackButton = false,
  onBackPress,
}: OnboardingHeaderProps) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: "#FEFEFE",
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
        alignItems: "center",
        position: "relative",
      }}
    >
      {showBackButton && (
        <Pressable
          onPress={onBackPress}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          style={{ position: "absolute", left: 24, padding: 6 }}
        >
          <ArrowLeft color="#1E3A8A" size={22} />
        </Pressable>
      )}
      <Image
        source={logoCompleta}
        contentFit="contain"
        style={{ width: 120, height: 28 }}
      />
    </View>
  );
}
