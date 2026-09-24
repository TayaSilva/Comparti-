import { View, Pressable, ScrollView } from "react-native";
import type { ComponentProps, ComponentType } from "react";
import {
  Settings,
  Heart,
  MessageCircle,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react-native";

import AppText from "@/components/ui/AppText";

type IconProps = ComponentProps<typeof Settings>;

type MenuItem = {
  id: string;
  label: string;
  icon: ComponentType<IconProps>;
  color: string;
  onPress?: () => void;
  isDanger?: boolean;
};

type ProfileMenuProps = {
  onSettingsPress?: () => void;
  onFavoritesPress?: () => void;
  onMessagesPress?: () => void;
  onPrivacyPress?: () => void;
  onHelpPress?: () => void;
  onLogoutPress?: () => void;
};

export default function ProfileMenu({
  onSettingsPress,
  onFavoritesPress,
  onMessagesPress,
  onPrivacyPress,
  onHelpPress,
  onLogoutPress,
}: ProfileMenuProps) {
  const menuItems: MenuItem[] = [
    {
      id: "settings",
      label: "Configurações",
      icon: Settings,
      color: "#6366F1",
      onPress: onSettingsPress,
    },
    {
      id: "favorites",
      label: "Meus Favoritos",
      icon: Heart,
      color: "#EF4444",
      onPress: onFavoritesPress,
    },
    {
      id: "messages",
      label: "Mensagens",
      icon: MessageCircle,
      color: "#3B82F6",
      onPress: onMessagesPress,
    },
    {
      id: "privacy",
      label: "Privacidade e Segurança",
      icon: Shield,
      color: "#22A06B",
      onPress: onPrivacyPress,
    },
    {
      id: "help",
      label: "Ajuda e Suporte",
      icon: HelpCircle,
      color: "#F59E0B",
      onPress: onHelpPress,
    },
    {
      id: "logout",
      label: "Sair da Conta",
      icon: LogOut,
      color: "#EF4444",
      onPress: onLogoutPress,
      isDanger: true,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingVertical: 20,
        gap: 12,
      }}
      showsVerticalScrollIndicator={false}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Pressable
            key={item.id}
            onPress={item.onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 14,
              borderRadius: 12,
              backgroundColor: item.isDanger ? "#FEF2F2" : "#FEFEFE",
              borderWidth: 1,
              borderColor: item.isDanger ? "#FEE2E2" : "#F3F4F6",
              gap: 12,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: `${item.color}15`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon color={item.color} size={20} strokeWidth={2} />
            </View>

            <AppText
              weight="semibold"
              style={{
                flex: 1,
                fontSize: 16,
                color: item.isDanger ? "#DC2626" : "#1E3A8A",
              }}
            >
              {item.label}
            </AppText>

            <ChevronRight
              color={item.isDanger ? "#DC2626" : "#9CA3AF"}
              size={20}
              strokeWidth={2}
            />
          </Pressable>
        );
      })}

      <View
        style={{
          marginTop: 16,
          paddingTop: 16,
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
        }}
      >
        <AppText
          style={{
            fontSize: 12,
            color: "#9CA3AF",
            textAlign: "center",
          }}
        >
          Compartie v1.0.0
        </AppText>
      </View>
    </ScrollView>
  );
}
