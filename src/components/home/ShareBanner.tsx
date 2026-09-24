import { View } from "react-native";

import AppText from "@/components/ui/AppText";
import Button from "@/components/ui/Button";

export default function ShareBanner() {
  const handleShareItem = () => {
    console.log("Usuário quer compartilhar um item");
  };

  return (
    <View
      style={{
        gap: 16,
        padding: 20,
        borderRadius: 22,
        backgroundColor: "#fef3c7",
      }}
    >
      <View style={{ gap: 8 }}>
        <AppText weight="bold" style={{ fontSize: 20, color: "#12304A" }}>
          Tem algo parado em casa?
        </AppText>
        <AppText
          style={{
            fontSize: 14,
            color: "#64748b",
            lineHeight: 20,
          }}
        >
          Compartilhe com seus vizinhos e ajude alguém do seu condomínio.
        </AppText>
      </View>

      <Button
        label="Compartilhar um item"
        onPress={handleShareItem}
        style={{ alignSelf: "flex-start" }}
      />
    </View>
  );
}
