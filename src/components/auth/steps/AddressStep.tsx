import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Hash, Home, MapPin, MapPinned, Signpost } from "lucide-react-native";

import FormField from "@/components/auth/FormField";
import StepTitle from "@/components/auth/StepTitle";
import type { StepProps } from "@/components/auth/types";
import { lookupCep } from "@/lib/api";
import { maskCep, onlyDigits } from "@/lib/masks";

export default function AddressStep({ data, errors, onChange }: StepProps) {
  const [isSearchingCep, setIsSearchingCep] = useState(false);

  const handleCepChange = async (value: string) => {
    const masked = maskCep(value);
    onChange("cep", masked);

    const digits = onlyDigits(masked);
    if (digits.length !== 8) return;

    setIsSearchingCep(true);
    const address = await lookupCep(digits);
    setIsSearchingCep(false);

    if (address) {
      onChange("street", address.street);
      onChange("neighborhood", address.neighborhood);
      onChange("city", address.city);
      onChange("state", address.state);
    }
  };

  return (
    <View style={{ gap: 20 }}>
      <StepTitle
        title="Seu endereço"
        subtitle="Informe o endereço do seu condomínio para encontrarmos seus vizinhos."
      />

      <View>
        <FormField
          label="CEP"
          icon={MapPin}
          placeholder="00000-000"
          keyboardType="number-pad"
          autoComplete="postal-code"
          value={data.cep}
          onChangeText={handleCepChange}
          error={errors.cep}
        />
        {isSearchingCep ? (
          <ActivityIndicator
            color="#F97316"
            style={{ position: "absolute", right: 14, top: 43 }}
          />
        ) : null}
      </View>
      <FormField
        label="Rua"
        icon={Signpost}
        placeholder="Nome da rua ou avenida"
        value={data.street}
        onChangeText={(value) => onChange("street", value)}
        error={errors.street}
      />
      <View style={{ flexDirection: "row", gap: 12 }}>
        <FormField
          style={{ flex: 1 }}
          label="Número"
          icon={Hash}
          placeholder="123"
          keyboardType="number-pad"
          value={data.number}
          onChangeText={(value) => onChange("number", value)}
          error={errors.number}
        />
        <FormField
          style={{ flex: 1.4 }}
          label="Complemento"
          icon={Home}
          placeholder="Opcional"
          value={data.complement}
          onChangeText={(value) => onChange("complement", value)}
        />
      </View>
      <FormField
        label="Bairro"
        icon={MapPinned}
        placeholder="Seu bairro"
        value={data.neighborhood}
        onChangeText={(value) => onChange("neighborhood", value)}
        error={errors.neighborhood}
      />
      <View style={{ flexDirection: "row", gap: 12 }}>
        <FormField
          style={{ flex: 2.4 }}
          label="Cidade"
          placeholder="Sua cidade"
          value={data.city}
          onChangeText={(value) => onChange("city", value)}
          error={errors.city}
        />
        <FormField
          style={{ flex: 1 }}
          label="UF"
          placeholder="SP"
          autoCapitalize="characters"
          maxLength={2}
          value={data.state}
          onChangeText={(value) => onChange("state", value.toUpperCase())}
          error={errors.state}
        />
      </View>
    </View>
  );
}
