import { Fragment } from "react";
import { View } from "react-native";
import { Check } from "lucide-react-native";

import AppText from "@/components/ui/AppText";

export const REGISTRATION_STEPS = [
  "Dados pessoais",
  "Endereço",
  "Condomínio",
  "Finalizar",
] as const;

type StepperProps = {
  currentStep: number;
};

const CIRCLE_SIZE = 26;

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <View style={{ paddingHorizontal: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {REGISTRATION_STEPS.map((label, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;

          return (
            <Fragment key={label}>
              {index > 0 ? (
                <View
                  style={{
                    flex: 1,
                    height: 1.5,
                    marginHorizontal: 6,
                    backgroundColor: index <= currentStep ? "#F97316" : "#E2E8F0",
                  }}
                />
              ) : null}
              <View
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  borderRadius: CIRCLE_SIZE / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isActive || isDone ? "#F97316" : "#EAF2FD",
                }}
              >
                {isDone ? (
                  <Check color="#FFFFFF" size={14} strokeWidth={3} />
                ) : (
                  <AppText
                    weight="semibold"
                    style={{ fontSize: 12, color: isActive ? "#FFFFFF" : "#30467B" }}
                  >
                    {index + 1}
                  </AppText>
                )}
              </View>
            </Fragment>
          );
        })}
      </View>

      <View style={{ flexDirection: "row", marginTop: 6, marginHorizontal: -12 }}>
        {REGISTRATION_STEPS.map((label, index) => (
          <AppText
            key={label}
            weight={index === currentStep ? "semibold" : "regular"}
            style={{
              flex: 1,
              fontSize: 10.5,
              textAlign: "center",
              color: index === currentStep ? "#0B2B66" : "#64748B",
            }}
          >
            {label}
          </AppText>
        ))}
      </View>
    </View>
  );
}
