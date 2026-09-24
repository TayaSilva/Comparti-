import { View, Pressable, ScrollView } from "react-native";

import AppText from "@/components/ui/AppText";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import { neighborRequests } from "@/mocks/neighbors";

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
            width: 160,
            padding: 16,
            borderRadius: 18,
            backgroundColor: "#fff",
            gap: 12,
          }}
        >
          <View style={{ alignItems: "center", gap: 8 }}>
            <Avatar name={neighbor.name} size={48} />
            <View style={{ alignItems: "center" }}>
              <AppText weight="bold" style={{ fontSize: 14 }}>
                {neighbor.name}
              </AppText>
              <AppText
                style={{
                  fontSize: 12,
                  color: "#64748b",
                }}
              >
                está procurando
              </AppText>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
              paddingVertical: 10,
              borderRadius: 12,
              backgroundColor: "#f1f5f9",
            }}
          >
            <AppText
              weight="semibold"
              style={{
                fontSize: 13,
                textAlign: "center",
                color: "#12304A",
              }}
            >
              {neighbor.itemNeeded}
            </AppText>
          </View>

          <Button
            label="Eu tenho"
            onPress={() => handleHaveItem(neighbor.name, neighbor.itemNeeded)}
            style={{ flex: 1, justifyContent: "center" }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
