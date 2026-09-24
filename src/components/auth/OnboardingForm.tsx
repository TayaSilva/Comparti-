import { useState } from "react";
import type { ComponentProps, ComponentType } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { Building2, Lock, Mail, User } from "lucide-react-native";

import AppText from "@/components/ui/AppText";
import AppTextInput from "@/components/ui/AppTextInput";

type IconProps = ComponentProps<typeof User>;

export type UserRegistrationData = {
  name: string;
  email: string;
  password: string;
  condominiumName: string;
  apartmentNumber?: string;
};

type OnboardingFormProps = {
  onSubmit?: (data: UserRegistrationData) => void;
  loading?: boolean;
};

type InputFieldProps = {
  icon: ComponentType<IconProps>;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
};

function InputField({
  icon: Icon,
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
}: InputFieldProps) {
  return (
    <View style={{ gap: 6 }}>
      <AppText weight="semibold" style={{ fontSize: 14, color: "#1E3A8A" }}>
        {label}
      </AppText>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 12,
          backgroundColor: "#F3F4F6",
          borderWidth: 1,
          borderColor: error ? "#EF4444" : "#E5E7EB",
          gap: 8,
        }}
      >
        <Icon color={error ? "#EF4444" : "#6366F1"} size={18} strokeWidth={2} />
        <AppTextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ flex: 1, fontSize: 14, padding: 0, color: "#0B2B66" }}
          placeholderTextColor="#9CA3AF"
        />
      </View>
      {error ? (
        <AppText style={{ fontSize: 12, color: "#EF4444" }}>{error}</AppText>
      ) : null}
    </View>
  );
}

export default function OnboardingForm({
  onSubmit,
  loading = false,
}: OnboardingFormProps) {
  const [formData, setFormData] = useState<UserRegistrationData>({
    name: "",
    email: "",
    password: "",
    condominiumName: "",
    apartmentNumber: "",
  });
  const [errors, setErrors] = useState<Partial<UserRegistrationData>>({});

  const updateField = (field: keyof UserRegistrationData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: Partial<UserRegistrationData> = {};

    if (!formData.name.trim()) nextErrors.name = "Nome é obrigatório";
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      nextErrors.email = "Informe um email válido";
    }
    if (formData.password.length < 6) {
      nextErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }
    if (!formData.condominiumName.trim()) {
      nextErrors.condominiumName = "Nome do condomínio é obrigatório";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) onSubmit?.(formData);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 32, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 8 }}>
          <AppText weight="bold" style={{ fontSize: 24, color: "#1E3A8A" }}>
            Bem-vindo ao Compartie! 👋
          </AppText>
          <AppText style={{ fontSize: 14, color: "#64748B" }}>
            Crie sua conta para começar a compartilhar com seus vizinhos
          </AppText>
        </View>

        <View style={{ gap: 16 }}>
          <InputField
            icon={User}
            label="Nome Completo"
            placeholder="Seu nome"
            value={formData.name}
            onChangeText={(value) => updateField("name", value)}
            error={errors.name}
          />
          <InputField
            icon={Mail}
            label="Email"
            placeholder="seu@email.com"
            value={formData.email}
            onChangeText={(value) => updateField("email", value)}
            error={errors.email}
          />
          <InputField
            icon={Lock}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChangeText={(value) => updateField("password", value)}
            error={errors.password}
            secureTextEntry
          />
          <InputField
            icon={Building2}
            label="Condomínio / Residencial"
            placeholder="Ex: Residencial Jardim"
            value={formData.condominiumName}
            onChangeText={(value) => updateField("condominiumName", value)}
            error={errors.condominiumName}
          />
          <InputField
            icon={Building2}
            label="Apartamento / Casa (Opcional)"
            placeholder="Ex: Apto 42 ou Casa 12"
            value={formData.apartmentNumber ?? ""}
            onChangeText={(value) => updateField("apartmentNumber", value)}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Pressable
            disabled={loading}
            onPress={handleSubmit}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 14,
              borderRadius: 12,
              backgroundColor: "#F97316",
              opacity: loading ? 0.7 : 1,
              alignItems: "center",
            }}
          >
            <AppText weight="bold" style={{ color: "#FFFFFF", fontSize: 16 }}>
              {loading ? "Criando conta..." : "Criar Conta"}
            </AppText>
          </Pressable>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AppText style={{ fontSize: 14, color: "#64748B" }}>
              Já tem conta?
            </AppText>
            <AppText weight="semibold" style={{ fontSize: 14, color: "#F97316" }}>
              Fazer login
            </AppText>
          </View>
        </View>

        <AppText style={{ fontSize: 12, color: "#9CA3AF", textAlign: "center", marginTop: 16 }}>
          Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade
        </AppText>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
