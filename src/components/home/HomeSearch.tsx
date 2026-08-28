import { Image } from "expo-image";
import { MapPin, Search } from "lucide-react-native";
import { View, type ImageStyle } from "react-native";

import AppText from "@/components/ui/AppText";
import AppTextInput from "@/components/ui/AppTextInput";

const apartmentImage = require("../../../assets/images/icons/apartamento.png");
const houseImage = require("../../../assets/images/icons/casa.png");

export type HomeSearchResidence = {
  condominiumName: string;
  isApartment?: boolean;
  isHouse?: boolean;
};

type HomeSearchProps = {
  residence: HomeSearchResidence;
  userName?: string;
};

function getResidenceImage({ isApartment, isHouse }: HomeSearchResidence) {
  if (isApartment) {
    return apartmentImage;
  }

  if (isHouse) {
    return houseImage;
  }

  return apartmentImage;
}

function getResidenceImageStyle({
  isApartment,
  isHouse,
}: HomeSearchResidence): ImageStyle {
  if (isApartment) {
    return {
      position: "absolute",
      right: -6,
      bottom: 18,
      width: 180,
      height: 176,
      opacity: 0.7,
    };
  }

  if (isHouse) {
    return {
      position: "absolute",
      right: -2,
      bottom: 18,
      width: 196,
      height: 142,
      opacity: 0.7,
    };
  }

  return {
    position: "absolute",
    right: -6,
    bottom: 40,
    width: 228,
    height: 176,
    opacity: 0.7,
  };
}

export default function HomeSearch({
  residence,
  userName = "Mariana",
}: HomeSearchProps) {
  const residenceImage = getResidenceImage(residence);
  const residenceImageStyle = getResidenceImageStyle(residence);

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <AppText weight="bold" style={{ fontSize: 28, lineHeight: 34 }}>
          Ola, {userName}!
        </AppText>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <MapPin color="#1E3A8A" size={16} strokeWidth={2.2} />
          <AppText weight="semibold" style={{ fontSize: 15, color: "#1E3A8A" }}>
            {residence.condominiumName}
          </AppText>
        </View>
      </View>

      <View
        style={{
          position: "relative",
          overflow: "visible",
          borderRadius: 28,
          backgroundColor: "#EAF2FF",
          paddingHorizontal: 18,
          paddingTop: 14,
          paddingBottom: 12,
          minHeight: 152,
          justifyContent: "space-between",
        }}
      >
        <Image
          source={residenceImage}
          contentFit="contain"
          style={residenceImageStyle}
        />

        <View style={{ gap: 4, maxWidth: "85%", marginTop: 10 }}>
          <AppText weight="bold" style={{ fontSize: 22, lineHeight: 26 }}>
            O que voce precisa hoje?
          </AppText>
          <AppText
            weight="semibold"
            style={{ fontSize: 12, lineHeight: 17, color: "#4B5D85" }}
          >
            Talvez algum vizinho tenha por perto.
          </AppText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            paddingLeft: 18,
            paddingRight: 10,
            paddingVertical: 2,
            minHeight: 40,
          }}
        >
          <AppTextInput
            placeholder="Buscar no meu condominio..."
            placeholderTextColor="#94A3B8"
            weight="semibold"
            style={{
              flex: 1,
              fontSize: 15,
              color: "#0F172A",
              paddingVertical: 6,
            }}
          />

          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search color="#1E3A8A" size={22} strokeWidth={2.3} />
          </View>
        </View>
      </View>
    </View>
  );
}
