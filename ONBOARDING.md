# Tela de Cadastro Compartie

## 📋 Visão Geral

Implementação completa da tela de cadastro (onboarding) em 4 etapas, exatamente conforme o layout do print fornecido.

## 🎯 Estrutura das Etapas

### Etapa 0: Bem-vindo (Welcome)
- **Visual:** Imagem ilustrativa (casa) + apresentação do app
- **Conteúdo:** 3 cards de benefícios (conectar, segurança, sustentabilidade)
- **Ações:** "Começar cadastro" ou "Entrar" (login em desenvolvimento)
- **Status:** Indicador visual no rodapé (1 bolinha cheia, 2 vazias)

### Etapa 1: Dados Pessoais
- **Campos:**
  - Nome completo (mín. nome + sobrenome)
  - E-mail (validação de formato)
  - Celular (máscara: (11) 91234-5678)
  - Data de nascimento (máscara: dd/mm/aaaa)
  - CPF (máscara: 000.000.000-00, validação de checksum)
  - Senha (mín. 6 caracteres, campo com toggle mostrar/ocultar)
- **Info:** Card de segurança explicando proteção de dados
- **Stepper:** Etapa 1/4

### Etapa 2: Endereço
- **Campos:**
  - CEP (máscara: 00000-000)
    - **Lookup automático** via ViaCep API (busca em tempo real)
    - Preenche automaticamente: rua, bairro, cidade, UF
  - Rua (preenchida automaticamente, editável)
  - Número (obrigatório)
  - Complemento (opcional: apto, sala, bloco, etc)
  - Bairro (preenchido automaticamente, editável)
  - Cidade (preenchida automaticamente, editável)
  - UF (preenchida automaticamente, editável)
- **Stepper:** Etapa 2/4

### Etapa 3: Condomínio
- **Campos:**
  - Nome do condomínio (ex: Residencial Jardim das Flores)
  - Tipo de moradia: Apartamento / Casa (radio buttons)
  - Se apartamento: Bloco/Torre (opcional)
  - Número da unidade (ex: Apto 42 ou Casa 12)
- **Stepper:** Etapa 3/4

### Etapa 4: Revisão e Aceite
- **Cards de revisão:** Dados pessoais | Endereço | Condomínio
  - Cada card mostra os dados preenchidos
  - Botão "Editar" em cada card para voltar e corrigir
- **Checkbox de aceite:**
  - "Li e concordo com os Termos de Uso e Política de Privacidade"
  - Obrigatório para continuar
- **Botão:** "Criar conta" (com loading)
- **Stepper:** Etapa 4/4 (completo)

## 🔧 Componentes Criados

### `src/components/auth/`

| Arquivo | Descrição |
|---------|-----------|
| `OnboardingHeader.tsx` | Header com logo e botão voltar |
| `Stepper.tsx` | Indicador visual de progresso (círculos + linhas) |
| `PrimaryButton.tsx` | Botão primário com ícone de seta e loading |
| `FormField.tsx` | Campo de formulário com ícone, label, erro e toggle de senha |
| `StepTitle.tsx` | Título + subtítulo de cada etapa |
| `WelcomeStep.tsx` | Tela de boas-vindas com benefícios |
| `types.ts` | Tipos TypeScript de dados e erros |

### `src/components/auth/steps/`

| Arquivo | Descrição |
|---------|-----------|
| `PersonalDataStep.tsx` | Etapa 1: Dados pessoais |
| `AddressStep.tsx` | Etapa 2: Endereço (com lookup de CEP) |
| `CondominiumStep.tsx` | Etapa 3: Condomínio |
| `ReviewStep.tsx` | Etapa 4: Revisão e aceite |

## 📚 Utilitários

### `src/lib/masks.ts`
Funções de formatação para inputs:
- `maskPhone(value)` → (11) 91234-5678
- `maskDate(value)` → dd/mm/aaaa
- `maskCpf(value)` → 000.000.000-00
- `maskCep(value)` → 00000-000
- `onlyDigits(value)` → Remove caracteres não numéricos

### `src/lib/validation.ts`
Validações de entrada:
- `isValidEmail(value)` → Regex simples (@)
- `isValidCpf(value)` → Valida checksum do CPF
- `parseBirthDate(value)` → Converte dd/mm/aaaa → yyyy-mm-dd

### `src/lib/api.ts`
Mock API (substituir quando backend estiver pronto):
- `api.register(payload)` → Retorna token + usuário
- `lookupCep(cep)` → Busca CEP via ViaCep (rua, bairro, cidade, UF)

## 🎨 Design System

Cores utilizadas:
- **Primary Orange:** `#F97316`
- **Dark Blue (titles):** `#0B2B66`
- **Medium Blue (text):** `#0B2239`
- **Light Blue (bg):** `#EAF2FD`
- **Border:** `#E2E8F0`
- **Error:** `#EF4444`
- **Success:** `#22A06B`

Tipografia:
- **Bold (titles):** NunitoSans_700Bold, 26px
- **Semibold (labels):** NunitoSans_600SemiBold, 14px
- **Regular (body):** NunitoSans_400Regular, 14px

## ✅ Validação por Etapa

**Etapa 1:**
- ✓ Nome: mínimo 2 palavras
- ✓ Email: formato válido
- ✓ Celular: mínimo 10 dígitos
- ✓ Data: válida e no passado
- ✓ CPF: checksum válido
- ✓ Senha: mínimo 6 caracteres

**Etapa 2:**
- ✓ CEP: exatamente 8 dígitos
- ✓ Rua: obrigatória
- ✓ Número: obrigatório
- ✓ Bairro: obrigatório
- ✓ Cidade: obrigatória
- ✓ UF: formato válido (2 letras)

**Etapa 3:**
- ✓ Nome condomínio: obrigatório
- ✓ Número unidade: obrigatório

**Etapa 4:**
- ✓ Termos aceitos: obrigatório

## 🔌 Integração com Backend

A estrutura está pronta para integração. Substitua `src/lib/api.ts`:

```typescript
// Exemplo real com Express/Node
export const api = {
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const response = await fetch("http://seu-backend:3333/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    // ... tratar resposta
  },
};
```

## 🚀 Como Usar

1. **Navegar para a tela:**
   ```typescript
   import { useRouter } from "expo-router";
   
   const router = useRouter();
   router.push("/onboarding");
   ```

2. **No onboarding, usuário passa por 5 telas (welcome + 4 steps):**
   - Clica "Começar cadastro" → Etapa 1
   - Preenche e clica "Continuar" → Etapa 2
   - Preenche e clica "Continuar" → Etapa 3
   - Preenche e clica "Continuar" → Etapa 4
   - Aceita termos e clica "Criar conta" → Chama API

3. **Erros de validação:**
   - Mostram em red abaixo do campo
   - Bloqueiam progresso até serem corrigidos

4. **Erros da API:**
   - Mostram Alert
   - Voltam para a etapa com erro
   - Campo aparece com mensagem de erro

## 📱 Responsividade

- Design pronto para mobile (testado em diferentes alturas)
- Keyboard avoid view integrado (iOS)
- Safe area insets respeitados (notch, dynamic island)
- Scroll automático quando keyboard aparece

## 🎯 Próximos Passos

1. **Backend:**
   - Criar endpoints `/auth/register` e `/auth/login`
   - Validar dados duplicados (email, CPF)
   - Hash de senha
   - Verificação de morador (via CEP/condomínio)

2. **Persistência:**
   - Guardar token com `expo-secure-store`
   - Implementar logout
   - Refresh token automático

3. **Tela de Login:**
   - Criar `/login` com email + senha
   - Link "Já tem uma conta? Entrar" no welcome

4. **Assets:**
   - Substituir `casa.png` pela ilustração do house do layout
   - Adicionar ícone de sucesso na tela final

## 📖 Arquivos Modificados

- ✨ Criado: `src/app/onboarding.tsx` (tela principal, 640 linhas)
- ✨ Criado: 9 componentes em `src/components/auth/`
- ✨ Criado: 4 steps em `src/components/auth/steps/`
- 🔄 Atualizado: `src/lib/api.ts` (mock pronto para backend)
- ✨ Criado: `src/lib/masks.ts` (máscaras de input)
- ✨ Criado: `src/lib/validation.ts` (validações)
- 🗑️ Removido: `src/components/auth/OnboardingForm.tsx` (antigo)

## 🧪 Teste Rápido

```bash
# Type-check
npx tsc --noEmit -p .

# Lint
npx expo lint

# Rodar
npx expo start
# Press 'a' para Android ou 'i' para iOS
# Clique em "/onboarding" para abrir a tela
```

---

**Pronto para backend!** 🚀
