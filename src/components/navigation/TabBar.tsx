import {
  Bell,
  Compass,
  House,
  Plus,
  UserRound,
} from "lucide-react-native";
import type { ComponentProps, ComponentType } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppText from "@/components/ui/AppText";

type IconProps = ComponentProps<typeof House>;

type TabItem = {
  key: string;
  label: string;
  active?: boolean;
  isPrimary?: boolean;
  icon: ComponentType<IconProps>;
};

const tabs: TabItem[] = [
  { key: "inicio", label: "Inicio", active: true, icon: House },
  { key: "explorar", label: "Explorar", icon: Compass },
  { key: "compartilhar", label: "Compartilhar", isPrimary: true, icon: Plus },
  { key: "atividades", label: "Atividades", icon: Bell },
  { key: "perfil", label: "Perfil", icon: UserRound },
];

export default function TabBar() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 10);

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 30,
     
        paddingTop: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: 14,
        
          paddingBottom: bottomInset,
        
          backgroundColor: "#fffdf9",
          shadowColor: "#1f2937",
          shadowOpacity: 0.08,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: -4 },
          elevation: 10,
        }}
      >
        {tabs.map(({ key, label, icon: Icon, active, isPrimary }) => {
          if (isPrimary) {
            return (
              <Pressable
                key={key}
                accessibilityRole="button"
                style={{
                  alignItems: "center",
                  gap: 6,
                  minWidth: 66,
                  marginTop: -28,
                }}
              >
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 26,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ff7a00",
                    shadowColor: "#ff7a00",
                    shadowOpacity: 0.35,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: 8,
                  }}
                >
                  <Icon color="#ffffff" size={26} strokeWidth={2.4} />
                </View>
                <AppText
                  weight="bold"
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "#6b7280",
                  }}
                >
                  {label}
                </AppText>
              </Pressable>
            );
          }

          return (
            <Pressable
              key={key}
              accessibilityRole="button"
              style={{
                alignItems: "center",
                gap: 6,
                minWidth: 58,
              }}
            >
              <Icon
                color={active ? "#2563eb" : "#64748b"}
                size={22}
                strokeWidth={active ? 2.4 : 2}
              />
              <AppText
                weight={active ? "bold" : "semibold"}
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  color: active ? "#2563eb" : "#64748b",
                }}
              >
                {label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
