import { Image } from "expo-image";
import { ScrollView, View } from "react-native";

import AppText from "@/components/ui/AppText";
import Badge from "@/components/ui/Badge";
import { availableItems } from "@/mocks/items";

const badgeColors = {
  loan: "#1677E8",
  paid: "#F5A400",
  donation: "#8B5CF6",
} as const;

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
            height: 180,
            borderRadius: 16,
            backgroundColor: item.color ?? "#DBEAFE",
            overflow: "hidden",
          }}
        >
          <Image
            source={item.image}
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />

          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "72%",
              backgroundColor: "rgba(0, 0, 0, 0.18)",
            }}
          />
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "55%",
              backgroundColor: "rgba(0, 0, 0, 0.26)",
            }}
          />
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "38%",
              backgroundColor: "rgba(0, 0, 0, 0.36)",
            }}
          />
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "24%",
              backgroundColor: "rgba(0, 0, 0, 0.48)",
            }}
          />

          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              minHeight: 90,
              paddingHorizontal: 10,
              paddingTop: 12,
              paddingBottom: 10,
              gap: 12,
            }}
          >
            <AppText
              weight="bold"
              numberOfLines={1}
              style={{ fontSize: 14, lineHeight: 18, color: "#FFFFFF" }}
            >
              {item.title}
            </AppText>

            <Badge
              label={item.badgeType === "loan" ? "Empréstimo grátis" : item.description}
              textColor={item.badgeTextColor ?? "#FFFFFF"}
              style={{
                alignSelf: "flex-start",
                backgroundColor: badgeColors[item.badgeType],
                borderRadius: 6,
                paddingHorizontal: 9,
                paddingVertical: 4,
              }}
            />

            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: "rgba(255,255,255,0.82)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText
                  weight="bold"
                  style={{ fontSize: 10, color: "#1E3A8A" }}
                >
                  {item.ownerName[0]}
                </AppText>
              </View>
              <AppText
                numberOfLines={1}
                style={{ flex: 1, fontSize: 10, color: "#FFFFFF" }}
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
