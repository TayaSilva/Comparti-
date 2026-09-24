import { Platform } from "react-native";

// No emulador Android, "localhost" aponta para o próprio emulador.
const defaultApiUrl =
  Platform.OS === "android" ? "http://10.0.2.2:3333" : "http://localhost:3333";

export const API_URL = process.env.EXPO_PUBLIC_API_URL ?? defaultApiUrl;

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public fields?: Record<string, string>
  ) {
    super(message);
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init.headers },
    });
  } catch {
    throw new ApiError("Não foi possível conectar ao servidor.", 0);
  }

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiError(
      body.message ?? "Erro inesperado. Tente novamente.",
      response.status,
      body.fields
    );
  }
  return body as T;
}

export type RegisterPayload = {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  cpf: string;
  password: string;
  address: {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  condominium: {
    name: string;
    unitType: "apartment" | "house";
    block?: string;
    unitNumber: string;
  };
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
    condominium: { id: string; name: string };
  };
};

export const api = {
  register: (payload: RegisterPayload) =>
    request<AuthResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  login: (email: string, password: string) =>
    request<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
};

type ViaCepResponse = {
  erro?: boolean;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export async function lookupCep(cep: string) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = (await response.json()) as ViaCepResponse;
    if (data.erro) return null;
    return {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch {
    return null;
  }
}
