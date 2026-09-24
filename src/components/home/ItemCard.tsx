import { View, ScrollView } from "react-native";

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
            gap: 10,
            borderRadius: 18,
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: 160,
              height: 100,
              backgroundColor: item.color,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AppText
              weight="bold"
              style={{
                fontSize: 14,
                color: "#64748b",
                textAlign: "center",
                paddingHorizontal: 12,
              }}
            >
              {item.title}
            </AppText>
          </View>

          <View style={{ paddingHorizontal: 12, paddingBottom: 12, gap: 8 }}>
            <Badge label={item.isFree ? "Empréstimo grátis" : item.description} />
            <AppText weight="semibold" style={{ fontSize: 14 }}>
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
                  fontSize: 12,
                  color: "#64748b",
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
