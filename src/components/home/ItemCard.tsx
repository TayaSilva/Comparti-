import { View, ScrollView } from "react-native";
import { Image } from "expo-image";

import Badge from "@/components/ui/Badge";
import AppText from "@/components/ui/AppText";
import { availableItems } from "@/mocks/items";

export default function ItemCard() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingRight: 6 }}
    >
      {availableItems.map((item) => (
        <View
          key={item.id}
          style={{
            width: 160,
            height: 220,
            borderRadius: 18,
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          {/* Background Image/Color */}
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: item.color,
            }}
          >
            {item.image ? (
              <Image
                source={item.image}
                contentFit="cover"
                style={{ width: "100%", height: "100%" }}
              />
            ) : null}
          </View>

          {/* Overlay with semi-transparent background */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              paddingHorizontal: 12,
              paddingVertical: 12,
              gap: 8,
            }}
          >
            <Badge label={item.isFree ? "Empréstimo grátis" : item.description} />
            <AppText
              weight="semibold"
              style={{
                fontSize: 14,
                color: "#fff",
              }}
            >
              {item.title}
            </AppText>
            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: "#FED7AA",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText
                  weight="bold"
                  style={{
                    fontSize: 10,
                    color: "#9A3412",
                  }}
                >
                  {item.ownerName[0]}
                </AppText>
              </View>
              <AppText
                style={{
                  fontSize: 11,
                  color: "#fff",
                }}
              >
                {item.ownerName} • {item.location}
              </AppText>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
