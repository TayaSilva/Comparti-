# Novas Telas - Compartie

Documentação das novas telas adicionadas ao projeto Compartie.

## 📋 Telas Criadas

### 1. Tela de Onboarding/Cadastro (`/src/app/onboarding.tsx`)

**Localização:** `src/app/onboarding.tsx`

**Descrição:** Tela para registro de novos usuários com formulário de cadastro.

**Componentes:**
- `OnboardingHeader` - Header com logo do projeto
- `OnboardingForm` - Formulário com campos de validação

**Campos do Formulário:**
- Nome Completo
- Email
- Senha (mínimo 6 caracteres)
- Nome do Condomínio
- Número do Apartamento/Casa (opcional)

**Features:**
- Validação de formulário em tempo real
- Mensagens de erro personalizadas
- Feedback visual de carregamento
- Responsivo a diferentes tamanhos de tela

**Como usar:**
```typescript
import OnboardingScreen from "@/app/onboarding";

// Navegar para a tela
router.push("/onboarding");
```

---

### 2. Tela de Perfil (`/src/app/profile.tsx`)

**Localização:** `src/app/profile.tsx`

**Descrição:** Tela que exibe dados do usuário, estatísticas e menu de opções.

**Componentes:**
- `ProfileHeader` - Header com avatar, nome e email do usuário
- `ProfileInfoSection` - Seção com estatísticas (favoritos, compartilhamentos, etc)
- `ProfileMenu` - Menu com opções como configurações, privacidade, etc

**Informações Exibidas:**
- Avatar do usuário
- Nome e email
- Condomínio/Residencial
- Contador de favoritos
- Contador de compartilhamentos
- Data de membro desde
- Menu com 6 opções principais

**Como usar:**
```typescript
import ProfileScreen from "@/app/profile";

// Navegar para a tela
router.push("/profile");
```

---

## 🎨 Componentes de Suporte Criados

### Componentes de Auth (`/src/components/auth/`)

#### OnboardingForm.tsx
Componente de formulário reutilizável com:
- Campo de entrada com ícone
- Validação de campo
- Mensagens de erro
- Estado de carregamento

**Props:**
```typescript
interface OnboardingFormProps {
  onSubmit?: (data: UserRegistrationData) => void;
  loading?: boolean;
}

interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  condominiumName: string;
  apartmentNumber?: string;
}
```

#### OnboardingHeader.tsx
Header minimalista com logo do projeto.

---

### Componentes de Perfil (`/src/components/profile/`)

#### ProfileHeader.tsx
Exibe avatar, nome, email e condomínio do usuário.

**Props:**
```typescript
interface ProfileHeaderProps {
  userName?: string;
  userEmail?: string;
  avatarUri?: string | null;
  residence?: string;
  onEditPress?: () => void;
}
```

#### ProfileInfoSection.tsx
Seção com estatísticas do usuário em cards.

**Props:**
```typescript
interface ProfileInfoSectionProps {
  favoritesCount?: number;
  sharesCount?: number;
  memberSince?: string;
}
```

#### ProfileMenu.tsx
Menu com opções de navegação e ações.

**Props:**
```typescript
interface ProfileMenuProps {
  onSettingsPress?: () => void;
  onFavoritesPress?: () => void;
  onMessagesPress?: () => void;
  onPrivacyPress?: () => void;
  onHelpPress?: () => void;
  onLogoutPress?: () => void;
}
```

---

## 🔗 Integrando com o TabBar

Para que o TabBar funcione com as novas telas, você precisa adicionar navegação. 

**Passo 1:** Modificar `TabBar.tsx` para usar navegação:

```typescript
import { useRouter } from "expo-router";

export default function TabBar() {
  const router = useRouter();
  
  const handleTabPress = (tab: string) => {
    switch(tab) {
      case "perfil":
        router.push("/profile");
        break;
      case "compartilhar":
        router.push("/onboarding"); // ou outra tela
        break;
      // ... outros casos
    }
  };
  
  // Use handleTabPress nos Pressable components
}
```

**Passo 2:** Criar uma estrutura de navegação com Expo Router:

```
src/app/
  ├── _layout.tsx (já existe)
  ├── index.tsx (Home - já existe)
  ├── onboarding.tsx (novo)
  └── profile.tsx (novo)
```

---

## 🎯 Próximos Passos Sugeridos

1. **Integrar com Backend:**
   - Conectar formulário de cadastro com API
   - Autenticação real do usuário
   - Persistência de dados

2. **Implementar Navegação Real:**
   - Usar Expo Router para navegação entre telas
   - Adicionar stack de navegação para fluxos
   - Proteger rotas autenticadas

3. **Adicionar Funcionalidades:**
   - Edição de perfil
   - Upload de foto
   - Configurações de privacidade
   - Sistema de mensagens

4. **Melhorar UX:**
   - Estados de carregamento
   - Tratamento de erros
   - Feedback de sucesso/erro
   - Loading skeletons

5. **Testes:**
   - Testar validação de formulário
   - Testar responsividade
   - Testar acessibilidade

---

## 📝 Notas Importantes

- As telas usam os componentes de UI existentes (AppText, AppTextInput, Button, Avatar)
- Seguem o padrão de design do projeto (cores, tipografia, espaçamento)
- São totalmente responsivas
- Contêm dados mock para demonstração
- Pronta para conectar com dados reais/API

---

## 🚀 Como Testar Localmente

1. Certifique-se de que o projeto está compilando:
   ```bash
   npm run lint
   ```

2. Inicie o projeto:
   ```bash
   npm run start
   ```

3. Abra em um emulador ou dispositivo:
   ```bash
   npm run android
   # ou
   npm run ios
   # ou
   npm run web
   ```

4. Navegue para as novas telas:
   - Onboarding: Digite `/onboarding` na URL ou adicione um botão de teste
   - Perfil: Digite `/profile` ou clique no ícone de perfil no TabBar

---

## 📱 Estrutura de Arquivos

```
compartie/src/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx (Home)
│   ├── onboarding.tsx (NOVO)
│   └── profile.tsx (NOVO)
├── components/
│   ├── auth/ (NOVO DIRETÓRIO)
│   │   ├── OnboardingForm.tsx
│   │   └── OnboardingHeader.tsx
│   ├── profile/ (NOVO DIRETÓRIO)
│   │   ├── ProfileHeader.tsx
│   │   ├── ProfileInfoSection.tsx
│   │   └── ProfileMenu.tsx
│   ├── home/
│   ├── navigation/
│   └── ui/
└── ...
```

