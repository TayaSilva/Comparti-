import { View } from "react-native";
import {
  CalendarDays,
  FileText,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react-native";

import FormField from "@/components/auth/FormField";
import StepTitle from "@/components/auth/StepTitle";
import type { StepProps } from "@/components/auth/types";
import AppText from "@/components/ui/AppText";
import { maskCpf, maskDate, maskPhone } from "@/lib/masks";

export default function PersonalDataStep({ data, errors, onChange }: StepProps) {
  return (
    <View style={{ gap: 20 }}>
      <StepTitle
        title="Seus dados pessoais"
        subtitle="Comece informando seus dados para criar sua conta no Compartiê."
      />

      <FormField
        label="Nome completo"
        icon={User}
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        autoComplete="name"
        value={data.fullName}
        onChangeText={(value) => onChange("fullName", value)}
        error={errors.fullName}
      />
      <FormField
        label="E-mail"
        icon={Mail}
        placeholder="seuemail@exemplo.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={data.email}
        onChangeText={(value) => onChange("email", value)}
        error={errors.email}
      />
      <View style={{ flexDirection: "row", gap: 12 }}>
        <FormField
          style={{ flex: 1 }}
          label="Celular"
          icon={Phone}
          placeholder="(11) 91234-5678"
          keyboardType="phone-pad"
          autoComplete="tel"
          value={data.phone}
          onChangeText={(value) => onChange("phone", maskPhone(value))}
          error={errors.phone}
        />
        <FormField
          style={{ flex: 1 }}
          label="Data de nascimento"
          icon={CalendarDays}
          placeholder="dd/mm/aaaa"
          keyboardType="number-pad"
          value={data.birthDate}
          onChangeText={(value) => onChange("birthDate", maskDate(value))}
          error={errors.birthDate}
        />
      </View>
      <FormField
        label="CPF"
        icon={FileText}
        placeholder="000.000.000-00"
        keyboardType="number-pad"
        value={data.cpf}
        onChangeText={(value) => onChange("cpf", maskCpf(value))}
        error={errors.cpf}
      />
      <FormField
        label="Crie uma senha"
        icon={Lock}
        placeholder="Mínimo de 6 caracteres"
        isPassword
        autoCapitalize="none"
        autoComplete="new-password"
        value={data.password}
        onChangeText={(value) => onChange("password", value)}
        error={errors.password}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 12,
          padding: 16,
          borderRadius: 12,
          backgroundColor: "#F1F6FD",
        }}
      >
        <ShieldCheck color="#30467B" size={22} strokeWidth={1.8} />
        <AppText style={{ flex: 1, fontSize: 12.5, lineHeight: 18, color: "#30467B" }}>
          Seus dados ficam protegidos e são usados apenas para verificar que você é
          morador do condomínio.
        </AppText>
      </View>
    </View>
  );
}
