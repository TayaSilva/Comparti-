import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Bell } from "lucide-react-native";

import Avatar from "@/components/ui/Avatar";
import IconButton from "@/components/ui/IconButton";

const logoCompleta = require("../../../assets/images/logos/logo-completa-colorido.png");

type HomeHeaderProps = {
  avatarUri?: string | null;
  notificationCount?: number;
  userName?: string;
};

export default function HomeHeader({
  avatarUri,
  notificationCount = 3,
  userName = "Mariana",
}: HomeHeaderProps) {
  return (
    <View style={{ gap: 18 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={logoCompleta}
          contentFit="contain"
          style={{ width: 150, height: 36 }}
        />

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <IconButton
            accessibilityLabel="Abrir notificacoes"
            badgeCount={notificationCount}
          >
            <Bell color="#1E3A8A" size={20} strokeWidth={2.2} />
          </IconButton>
          <Avatar imageUri={avatarUri} name={userName} size={42} />
        </View>
      </View>

      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#64748B" }}>
          Ola, {userName}!
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "700", color: "#0F172A" }}>
          Bora compartilhar hoje?
        </Text>
      </View>
    </View>
  );
}
