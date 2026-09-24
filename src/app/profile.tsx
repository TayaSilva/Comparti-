import { View, useWindowDimensions } from "react-native";
import { useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfoSection from "@/components/profile/ProfileInfoSection";
import ProfileMenu from "@/components/profile/ProfileMenu";
import TabBar from "@/components/navigation/TabBar";

export default function ProfileScreen() {
  const { height } = useWindowDimensions();
  const [userData] = useState({
    name: "Mariana Silva",
    email: "mariana.silva@email.com",
    residence: "Residencial Jardim das Flores",
    favoritesCount: 12,
    sharesCount: 8,
    memberSince: "Agosto 2024",
  });

  const handleEditProfile = () => {
    console.log("Abrindo edição de perfil");
    alert("Tela de edição de perfil - em desenvolvimento");
  };

  const handleSettings = () => {
    console.log("Abrindo configurações");
    alert("Configurações - em desenvolvimento");
  };

  const handleFavorites = () => {
    console.log("Abrindo favoritos");
    alert("Meus Favoritos - em desenvolvimento");
  };

  const handleMessages = () => {
    console.log("Abrindo mensagens");
    alert("Mensagens - em desenvolvimento");
  };

  const handlePrivacy = () => {
    console.log("Abrindo privacidade");
    alert("Privacidade e Segurança - em desenvolvimento");
  };

  const handleHelp = () => {
    console.log("Abrindo ajuda");
    alert("Ajuda e Suporte - em desenvolvimento");
  };

  const handleLogout = () => {
    console.log("Fazendo logout");
    alert("Logout confirmado!");
  };

  return (
    <View className="bg-general" style={{ flex: 1, minHeight: height }}>
      <ProfileHeader
        userName={userData.name}
        userEmail={userData.email}
        residence={userData.residence}
        onEditPress={handleEditProfile}
      />

      <ProfileInfoSection
        favoritesCount={userData.favoritesCount}
        sharesCount={userData.sharesCount}
        memberSince={userData.memberSince}
      />

      <ProfileMenu
        onSettingsPress={handleSettings}
        onFavoritesPress={handleFavorites}
        onMessagesPress={handleMessages}
        onPrivacyPress={handlePrivacy}
        onHelpPress={handleHelp}
        onLogoutPress={handleLogout}
      />

      <TabBar />
    </View>
  );
}
