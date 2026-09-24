import { useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import OnboardingHeader from "@/components/auth/OnboardingHeader";
import PrimaryButton from "@/components/auth/PrimaryButton";
import Stepper, { REGISTRATION_STEPS } from "@/components/auth/Stepper";
import WelcomeStep from "@/components/auth/WelcomeStep";
import AddressStep from "@/components/auth/steps/AddressStep";
import CondominiumStep from "@/components/auth/steps/CondominiumStep";
import PersonalDataStep from "@/components/auth/steps/PersonalDataStep";
import ReviewStep from "@/components/auth/steps/ReviewStep";
import {
  emptyRegistration,
  type RegistrationData,
  type RegistrationErrors,
} from "@/components/auth/types";
import { api, ApiError } from "@/lib/api";
import { onlyDigits } from "@/lib/masks";
import { isValidCpf, isValidEmail, parseBirthDate } from "@/lib/validation";

const WELCOME = -1;
const LAST_STEP = REGISTRATION_STEPS.length - 1;

// Em qual etapa cada campo aparece, para voltar até ele se a API recusar o valor.
const fieldStep: Partial<Record<keyof RegistrationData, number>> = {
  fullName: 0,
  email: 0,
  phone: 0,
  birthDate: 0,
  cpf: 0,
  password: 0,
  cep: 1,
  street: 1,
  number: 1,
  neighborhood: 1,
  city: 1,
  state: 1,
  condominiumName: 2,
  unitNumber: 2,
};

function validateStep(step: number, data: RegistrationData): RegistrationErrors {
  const errors: RegistrationErrors = {};
  const required = (field: keyof RegistrationData, message: string) => {
    if (!String(data[field]).trim()) errors[field] = message;
  };

  if (step === 0) {
    if (data.fullName.trim().split(/\s+/).length < 2) {
      errors.fullName = "Informe nome e sobrenome";
    }
    if (!isValidEmail(data.email)) errors.email = "Informe um e-mail válido";
    if (onlyDigits(data.phone).length < 10) errors.phone = "Celular inválido";
    if (!parseBirthDate(data.birthDate)) errors.birthDate = "Data inválida";
    if (!isValidCpf(data.cpf)) errors.cpf = "CPF inválido";
    if (data.password.length < 6) errors.password = "A senha precisa ter 6 caracteres ou mais";
  }

  if (step === 1) {
    if (onlyDigits(data.cep).length !== 8) errors.cep = "CEP inválido";
    required("street", "Informe a rua");
    required("number", "Informe o número");
    required("neighborhood", "Informe o bairro");
    required("city", "Informe a cidade");
    if (!/^[A-Z]{2}$/.test(data.state)) errors.state = "UF inválida";
  }

  if (step === 2) {
    required("condominiumName", "Informe o nome do condomínio");
    required("unitNumber", "Informe o número da unidade");
  }

  if (step === 3 && !data.acceptedTerms) {
    errors.acceptedTerms = "Você precisa aceitar os termos para continuar";
  }

  return errors;
}

export default function OnboardingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);

  const [step, setStep] = useState(WELCOME);
  const [data, setData] = useState<RegistrationData>(emptyRegistration);
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToStep = (nextStep: number) => {
    setStep(nextStep);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  };

  const handleChange = <K extends keyof RegistrationData>(
    field: K,
    value: RegistrationData[K]
  ) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleBack = () => {
    if (step === WELCOME) {
      if (router.canGoBack()) router.back();
      return;
    }
    setErrors({});
    goToStep(step - 1);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      await api.register({
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: onlyDigits(data.phone),
        birthDate: parseBirthDate(data.birthDate)!,
        cpf: onlyDigits(data.cpf),
        password: data.password,
        address: {
          cep: onlyDigits(data.cep),
          street: data.street.trim(),
          number: data.number.trim(),
          complement: data.complement.trim() || undefined,
          neighborhood: data.neighborhood.trim(),
          city: data.city.trim(),
          state: data.state,
        },
        condominium: {
          name: data.condominiumName.trim(),
          unitType: data.unitType,
          block: data.unitType === "apartment" ? data.block.trim() || undefined : undefined,
          unitNumber: data.unitNumber.trim(),
        },
      });
      // TODO: guardar o token (expo-secure-store) quando a sessão for implementada.
      Alert.alert("Conta criada!", "Bem-vindo ao Compartiê 🎉");
      router.replace("/");
    } catch (error) {
      if (error instanceof ApiError && error.fields) {
        const fieldErrors = error.fields as RegistrationErrors;
        setErrors(fieldErrors);
        const steps = Object.keys(fieldErrors)
          .map((field) => fieldStep[field as keyof RegistrationData])
          .filter((value): value is number => value !== undefined);
        if (steps.length) goToStep(Math.min(...steps));
      }
      const message =
        error instanceof ApiError ? error.message : "Erro ao criar conta. Tente novamente.";
      Alert.alert("Não foi possível criar sua conta", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    if (step === LAST_STEP) {
      submit();
    } else {
      goToStep(step + 1);
    }
  };

  const stepProps = { data, errors, onChange: handleChange };

  return (
    <View style={{ flex: 1, backgroundColor: "#FEFEFE", paddingTop: insets.top }}>
      <OnboardingHeader onBackPress={handleBack} />

      {step === WELCOME ? (
        <WelcomeStep
          onStart={() => goToStep(0)}
          onLogin={() => Alert.alert("Entrar", "Tela de login em desenvolvimento.")}
          bottomInset={insets.bottom}
        />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingTop: 8,
              paddingBottom: insets.bottom + 24,
              gap: 28,
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Stepper currentStep={step} />

            {step === 0 ? <PersonalDataStep {...stepProps} /> : null}
            {step === 1 ? <AddressStep {...stepProps} /> : null}
            {step === 2 ? <CondominiumStep {...stepProps} /> : null}
            {step === 3 ? <ReviewStep {...stepProps} onEditStep={goToStep} /> : null}

            <PrimaryButton
              label={step === LAST_STEP ? "Criar conta" : "Continuar"}
              onPress={handleContinue}
              loading={isSubmitting}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
