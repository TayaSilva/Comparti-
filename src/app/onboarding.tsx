import { View } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import OnboardingHeader from "@/components/auth/OnboardingHeader";
import OnboardingForm, {
  type UserRegistrationData,
} from "@/components/auth/OnboardingForm";

export default function OnboardingScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: UserRegistrationData) => {
    setIsLoading(true);
    try {
      // Simulando chamada à API
      console.log("Registrando usuário:", data);
      
      // Aqui você conectaria com sua API real
      // await api.registerUser(data);
      
      // Após sucesso, você redirecionaria para a home
      // router.replace("/(tabs)/home");
      
      setTimeout(() => {
        setIsLoading(false);
        alert("Conta criada com sucesso! 🎉");
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.error("Erro ao registrar:", error);
      alert("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FEFEFE" }}>
      <OnboardingHeader
        showBackButton
        onBackPress={() => router.back()}
      />
      <OnboardingForm onSubmit={handleSubmit} loading={isLoading} />
    </View>
  );
}
