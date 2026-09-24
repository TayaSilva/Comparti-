export type RegistrationData = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  cpf: string;
  password: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  condominiumName: string;
  unitType: "apartment" | "house";
  block: string;
  unitNumber: string;
  acceptedTerms: boolean;
};

export type RegistrationErrors = Partial<Record<keyof RegistrationData, string>>;

export type StepProps = {
  data: RegistrationData;
  errors: RegistrationErrors;
  onChange: <K extends keyof RegistrationData>(
    field: K,
    value: RegistrationData[K]
  ) => void;
};

export const emptyRegistration: RegistrationData = {
  fullName: "",
  email: "",
  phone: "",
  birthDate: "",
  cpf: "",
  password: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  condominiumName: "",
  unitType: "apartment",
  block: "",
  unitNumber: "",
  acceptedTerms: false,
};
