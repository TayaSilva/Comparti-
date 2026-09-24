import { Image } from "expo-image";
import { Pressable, View } from "react-native";

import AppText from "@/components/ui/AppText";

const shareBoxImage = require("../../../assets/images/share-box.png");

export default function ShareBanner() {
  const handleShareItem = () => {
    console.log("Usuário quer compartilhar um item");
  };

  return (
    <View
      style={{
        minHeight: 88,
        paddingLeft: 14,
        paddingRight: 10,
        borderRadius: 14,
        backgroundColor: "#E8F1FF",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        marginHorizontal: -6,
      }}
    >
      <View style={{ width: "52%", gap: 4, zIndex: 2 }}>
        <AppText
          weight="bold"
          style={{ fontSize: 14, lineHeight: 17, color: "#12304A" }}
        >
          Tem algo parado em casa?
        </AppText>
        <AppText
          style={{ fontSize: 10, lineHeight: 13, color: "#334155" }}
        >
          Compartilhe com seus vizinhos e ajude alguém do seu condomínio.
        </AppText>
      </View>

      <Image
        source={shareBoxImage}
        contentFit="contain"
        style={{
          position: "absolute",
          width: 110,
          height: 110,
          right: 58,
          bottom: -25,
          zIndex: 1,
        }}
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Compartilhar"
        onPress={handleShareItem}
        style={{
          position: "absolute",
          right: 10,
          top: 29,
          width: 80,
          minHeight: 24,
          paddingHorizontal: 2,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FF7600",
          zIndex: 3,
        }}
      >
        <AppText
          weight="semibold"
          numberOfLines={1}
          style={{ fontSize: 10, color: "#FFFFFF" }}
        >
          Compartilhar
        </AppText>
      </Pressable>
    </View>
  );
}
