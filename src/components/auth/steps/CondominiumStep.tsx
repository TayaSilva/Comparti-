import { Pressable, View } from "react-native";
import { Building, Building2, DoorOpen, House, Layers } from "lucide-react-native";

import FormField from "@/components/auth/FormField";
import StepTitle from "@/components/auth/StepTitle";
import type { RegistrationData, StepProps } from "@/components/auth/types";
import AppText from "@/components/ui/AppText";

const unitOptions: {
  value: RegistrationData["unitType"];
  label: string;
  icon: typeof Building;
}[] = [
  { value: "apartment", label: "Apartamento", icon: Building },
  { value: "house", label: "Casa", icon: House },
];

export default function CondominiumStep({ data, errors, onChange }: StepProps) {
  const isApartment = data.unitType === "apartment";

  return (
    <View style={{ gap: 20 }}>
      <StepTitle
        title="Seu condomínio"
        subtitle="Conte onde você mora para conectar você aos vizinhos certos."
      />

      <FormField
        label="Nome do condomínio"
        icon={Building2}
        placeholder="Ex: Residencial Jardim das Flores"
        autoCapitalize="words"
        value={data.condominiumName}
        onChangeText={(value) => onChange("condominiumName", value)}
        error={errors.condominiumName}
      />

      <View style={{ gap: 8 }}>
        <AppText weight="bold" style={{ fontSize: 14, color: "#0B2239" }}>
          Tipo de moradia
        </AppText>
        <View style={{ flexDirection: "row", gap: 12 }}>
          {unitOptions.map(({ value, label, icon: Icon }) => {
            const isSelected = data.unitType === value;
            return (
              <Pressable
                key={value}
                onPress={() => onChange("unitType", value)}
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected }}
                style={{
                  flex: 1,
                  height: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: isSelected ? "#F97316" : "#E2E8F0",
                  backgroundColor: isSelected ? "#FFF1E8" : "#FFFFFF",
                }}
              >
                <Icon color={isSelected ? "#F97316" : "#64748B"} size={18} />
                <AppText
                  weight="semibold"
                  style={{ fontSize: 14, color: isSelected ? "#F97316" : "#30467B" }}
                >
                  {label}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        {isApartment ? (
          <FormField
            style={{ flex: 1 }}
            label="Bloco / Torre"
            icon={Layers}
            placeholder="Opcional"
            autoCapitalize="characters"
            value={data.block}
            onChangeText={(value) => onChange("block", value)}
          />
        ) : null}
        <FormField
          style={{ flex: 1 }}
          label={isApartment ? "Apartamento" : "Número da casa"}
          icon={DoorOpen}
          placeholder={isApartment ? "Ex: 42" : "Ex: 12"}
          value={data.unitNumber}
          onChangeText={(value) => onChange("unitNumber", value)}
          error={errors.unitNumber}
        />
      </View>
    </View>
  );
}
