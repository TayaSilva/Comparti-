import { Image } from "expo-image";
import { Pressable, ScrollView, View } from "react-native";

import AppText from "@/components/ui/AppText";
import Avatar from "@/components/ui/Avatar";
import { neighborRequests } from "@/mocks/neighbors";

const drillIcon = require("../../../assets/images/icons/furadeira.png");

export default function RequestCard() {
  const handleHaveItem = (neighborName: string, item: string) => {
    console.log(`${neighborName} está procurando ${item}`);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingRight: 6 }}
    >
      {neighborRequests.map((neighbor) => (
        <View
          key={neighbor.id}
          style={{
            width: 236,
            minHeight: 270,
            padding: 14,
            borderRadius: 18,
            backgroundColor: "#FFF1E8",
            borderWidth: 1,
            borderColor: "#FCE4D5",
            gap: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Avatar name={neighbor.name} size={42} />
            <AppText
              weight="semibold"
              numberOfLines={1}
              style={{ flex: 1, fontSize: 13, color: "#334155" }}
            >
              {neighbor.name} está procurando
            </AppText>
          </View>

          <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
            <Image
              source={drillIcon}
              contentFit="contain"
              style={{ width: 42, height: 42, marginTop: 2 }}
            />
            <View style={{ flex: 1, gap: 6 }}>
              <AppText
                weight="bold"
                numberOfLines={1}
                style={{ fontSize: 18, lineHeight: 22, color: "#0F172A" }}
              >
                {neighbor.itemNeeded}
              </AppText>
              <AppText
                numberOfLines={3}
                style={{ fontSize: 13, lineHeight: 18, color: "#334155" }}
              >
                “{neighbor.description}”
              </AppText>
            </View>
          </View>

          <AppText
            weight="semibold"
            style={{ marginLeft: 54, fontSize: 13, color: "#475569" }}
          >
            {neighbor.location}
          </AppText>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Responder que tem ${neighbor.itemNeeded}`}
            onPress={() => handleHaveItem(neighbor.name, neighbor.itemNeeded)}
            style={{
              minHeight: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              backgroundColor: "#FF7600",
            }}
          >
            <AppText weight="bold" style={{ fontSize: 14, color: "#FFFFFF" }}>
              Eu tenho
            </AppText>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}
