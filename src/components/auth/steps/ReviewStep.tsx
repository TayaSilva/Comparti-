import { Pressable, View } from "react-native";
import { Check } from "lucide-react-native";

import StepTitle from "@/components/auth/StepTitle";
import type { StepProps } from "@/components/auth/types";
import AppText from "@/components/ui/AppText";

type ReviewStepProps = StepProps & {
  onEditStep: (step: number) => void;
};

type ReviewCardProps = {
  title: string;
  lines: string[];
  onEdit: () => void;
};

function ReviewCard({ title, lines, onEdit }: ReviewCardProps) {
  return (
    <View
      style={{
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        gap: 6,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText weight="bold" style={{ fontSize: 15, color: "#0B2239" }}>
          {title}
        </AppText>
        <Pressable onPress={onEdit} accessibilityRole="button" hitSlop={8}>
          <AppText weight="semibold" style={{ fontSize: 13, color: "#F97316" }}>
            Editar
          </AppText>
        </Pressable>
      </View>
      {lines.map((line, index) => (
        <AppText key={index} style={{ fontSize: 13, lineHeight: 18, color: "#30467B" }}>
          {line}
        </AppText>
      ))}
    </View>
  );
}

export default function ReviewStep({ data, errors, onChange, onEditStep }: ReviewStepProps) {
  const unit =
    data.unitType === "apartment"
      ? `Apto ${data.unitNumber}${data.block ? ` · Bloco ${data.block}` : ""}`
      : `Casa ${data.unitNumber}`;
  const complement = data.complement ? ` - ${data.complement}` : "";

  return (
    <View style={{ gap: 16 }}>
      <StepTitle
        title="Quase lá!"
        subtitle="Confira seus dados antes de criar sua conta no Compartiê."
      />

      <ReviewCard
        title="Dados pessoais"
        lines={[data.fullName, data.email, data.phone, `CPF ${data.cpf}`]}
        onEdit={() => onEditStep(0)}
      />
      <ReviewCard
        title="Endereço"
        lines={[
          `${data.street}, ${data.number}${complement}`,
          `${data.neighborhood} · ${data.city}/${data.state}`,
          `CEP ${data.cep}`,
        ]}
        onEdit={() => onEditStep(1)}
      />
      <ReviewCard
        title="Condomínio"
        lines={[data.condominiumName, unit]}
        onEdit={() => onEditStep(2)}
      />

      <Pressable
        onPress={() => onChange("acceptedTerms", !data.acceptedTerms)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: data.acceptedTerms }}
        style={{ flexDirection: "row", alignItems: "flex-start", gap: 12, marginTop: 4 }}
      >
        <View
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            borderWidth: 1.5,
            borderColor: errors.acceptedTerms
              ? "#EF4444"
              : data.acceptedTerms
                ? "#F97316"
                : "#CBD5E1",
            backgroundColor: data.acceptedTerms ? "#F97316" : "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.acceptedTerms ? <Check color="#FFFFFF" size={14} strokeWidth={3} /> : null}
        </View>
        <AppText style={{ flex: 1, fontSize: 13, lineHeight: 19, color: "#30467B" }}>
          Li e concordo com os{" "}
          <AppText weight="bold" style={{ color: "#F97316" }}>
            Termos de Uso
          </AppText>{" "}
          e a{" "}
          <AppText weight="bold" style={{ color: "#F97316" }}>
            Política de Privacidade
          </AppText>
          .
        </AppText>
      </Pressable>
      {errors.acceptedTerms ? (
        <AppText style={{ fontSize: 12, color: "#EF4444" }}>{errors.acceptedTerms}</AppText>
      ) : null}
    </View>
  );
}
