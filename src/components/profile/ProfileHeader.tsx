import { View, Pressable } from "react-native";
import { Edit2 } from "lucide-react-native";

import Avatar from "@/components/ui/Avatar";
import AppText from "@/components/ui/AppText";

type ProfileHeaderProps = {
  userName?: string;
  userEmail?: string;
  avatarUri?: string | null;
  residence?: string;
  onEditPress?: () => void;
};

export default function ProfileHeader({
  userName = "Mariana Silva",
  userEmail = "mariana@email.com",
  avatarUri,
  residence = "Residencial Jardim das Flores",
  onEditPress,
}: ProfileHeaderProps) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#FEFEFE",
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
        alignItems: "center",
        gap: 16,
      }}
    >
      <View style={{ position: "relative" }}>
        <Avatar imageUri={avatarUri} name={userName} size={80} />
        <Pressable
          onPress={onEditPress}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "#F97316",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 3,
            borderColor: "#FEFEFE",
          }}
        >
          <Edit2 color="#ffffff" size={16} strokeWidth={2.4} />
        </Pressable>
      </View>

      <View style={{ alignItems: "center", gap: 4 }}>
        <AppText weight="bold" style={{ fontSize: 18, color: "#1E3A8A" }}>
          {userName}
        </AppText>
        <AppText style={{ fontSize: 14, color: "#64748B" }}>
          {userEmail}
        </AppText>
      </View>

      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          backgroundColor: "#EAF2FD",
          borderRadius: 8,
        }}
      >
        <AppText
          weight="semibold"
          style={{ fontSize: 12, color: "#1E40AF" }}
        >
          📍 {residence}
        </AppText>
      </View>
    </View>
  );
}
