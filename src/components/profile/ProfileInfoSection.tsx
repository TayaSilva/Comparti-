import { View } from "react-native";
import { Heart, Share2, Clock } from "lucide-react-native";

import AppText from "@/components/ui/AppText";

type ProfileInfoSectionProps = {
  favoritesCount?: number;
  sharesCount?: number;
  memberSince?: string;
};

export default function ProfileInfoSection({
  favoritesCount = 12,
  sharesCount = 8,
  memberSince = "Agosto 2024",
}: ProfileInfoSectionProps) {
  const stats = [
    {
      icon: Heart,
      label: "Favoritos",
      value: favoritesCount.toString(),
      color: "#EF4444",
    },
    {
      icon: Share2,
      label: "Compartilhando",
      value: sharesCount.toString(),
      color: "#F97316",
    },
    {
      icon: Clock,
      label: "Membro desde",
      value: memberSince,
      color: "#22A06B",
    },
  ];

  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 16,
        backgroundColor: "#FEFEFE",
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
      }}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <View
            key={index}
            style={{
              flex: 1,
              alignItems: "center",
              gap: 8,
              paddingVertical: 12,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: `${stat.color}15`,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon color={stat.color} size={22} strokeWidth={2} />
            </View>
            <AppText weight="bold" style={{ fontSize: 16, color: "#1E3A8A" }}>
              {stat.value}
            </AppText>
            <AppText style={{ fontSize: 12, color: "#64748B" }}>
              {stat.label}
            </AppText>
          </View>
        );
      })}
    </View>
  );
}
