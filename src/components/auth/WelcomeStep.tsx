import type { ComponentProps, ComponentType } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { Leaf, LockKeyhole, User, UsersRound } from "lucide-react-native";

import PrimaryButton from "@/components/auth/PrimaryButton";
import AppText from "@/components/ui/AppText";

// TODO: trocar pela ilustração da casa do layout quando o asset for exportado.
const heroImage = require("../../../assets/images/icons/casa.png");

type IconProps = ComponentProps<typeof User>;

type Feature = {
  icon: ComponentType<IconProps>;
  iconColor: string;
  background: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: UsersRound,
    iconColor: "#F97316",
    background: "#EAF2FD",
    title: "Conecte-se com\nseus vizinhos",
    description: "Compartilhe e empreste itens\nde forma segura.",
  },
  {
    icon: LockKeyhole,
    iconColor: "#2563EB",
    background: "#EAF2FD",
    title: "Apenas moradores\nverificados",
    description: "Mais segurança para todos.",
  },
  {
    icon: Leaf,
    iconColor: "#22A06B",
    background: "#E8F7EF",
    title: "Dê um novo uso\naos seus itens",
    description: "Ajude seu vizinho e contribua\ncom um consumo mais consciente.",
  },
];

type WelcomeStepProps = {
  onStart: () => void;
  onLogin: () => void;
  bottomInset: number;
};

export default function WelcomeStep({ onStart, onLogin, bottomInset }: WelcomeStepProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={heroImage}
          contentFit="cover"
          style={{ width: "100%", aspectRatio: 1.6, borderRadius: 24 }}
        />

        <AppText
          weight="bold"
          style={{ fontSize: 32, lineHeight: 38, color: "#0B2B66", marginTop: 16 }}
        >
          Vamos criar{"\n"}sua conta?
        </AppText>
        <AppText style={{ fontSize: 15, lineHeight: 21, color: "#30467B", marginTop: 8 }}>
          Cadastre-se para começar a compartilhar e encontrar itens no seu condomínio.
        </AppText>

        <View style={{ gap: 18, marginTop: 24 }}>
          {features.map(({ icon: Icon, iconColor, background, title, description }) => (
            <View key={title} style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: background,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon color={iconColor} fill={iconColor} size={22} strokeWidth={1.8} />
              </View>
              <View style={{ flex: 1, gap: 4 }}>
                <AppText weight="bold" style={{ fontSize: 15, lineHeight: 19, color: "#0B2239" }}>
                  {title}
                </AppText>
                <AppText style={{ fontSize: 12.5, lineHeight: 17, color: "#64748B" }}>
                  {description}
                </AppText>
              </View>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 20 }}>
          <View style={{ width: 18, height: 5, borderRadius: 3, backgroundColor: "#F97316" }} />
          <View style={{ width: 12, height: 5, borderRadius: 3, backgroundColor: "#E2E8F0" }} />
          <View style={{ width: 12, height: 5, borderRadius: 3, backgroundColor: "#E2E8F0" }} />
        </View>
      </ScrollView>

      <View
        style={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: bottomInset + 20, gap: 18 }}
      >
        <PrimaryButton label="Começar cadastro" onPress={onStart} />
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}>
          <AppText style={{ fontSize: 14, color: "#30467B" }}>Já tem uma conta?</AppText>
          <Pressable onPress={onLogin} accessibilityRole="link" hitSlop={8}>
            <AppText
              weight="bold"
              style={{ fontSize: 14, color: "#F97316", textDecorationLine: "underline" }}
            >
              Entrar
            </AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
