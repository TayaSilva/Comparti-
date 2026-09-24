// Mock API para testes. Substitua pela URL real do backend quando pronto.
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 400,
    public fields?: Record<string, string>
  ) {
    super(message);
  }
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
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    // TODO: Conectar com a API real quando o backend estiver pronto
    console.log("Dados de cadastro:", payload);

    // Simular um pequeno delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      token: "mock-token-123",
      user: {
        id: "user-123",
        fullName: payload.fullName,
        email: payload.email,
        condominium: {
          id: "cond-123",
          name: payload.condominium.name,
        },
      },
    };
  },
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
