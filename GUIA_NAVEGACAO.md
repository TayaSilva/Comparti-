# Guia de Navegação - Compartie

Instruções para integrar a navegação entre as telas novas.

## 🔄 Fluxo de Navegação Recomendado

```
Tela de Onboarding (Novo Usuário)
         ↓
    Home (depois de login)
         ↓
    Perfil / Explorar / Atividades / etc
```

---

## 📱 Implementação com Expo Router

### Passo 1: Atualizar TabBar.tsx

Modifique `src/components/navigation/TabBar.tsx` para adicionar navegação:

```typescript
import { useRouter } from "expo-router";
import {
  Bell,
  Compass,
  House,
  Plus,
  UserRound,
} from "lucide-react-native";
import type { ComponentProps, ComponentType } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AppText from "@/components/ui/AppText";

type IconProps = ComponentProps<typeof House>;

type TabItem = {
  key: string;
  label: string;
  active?: boolean;
  isPrimary?: boolean;
  icon: ComponentType<IconProps>;
  route: string; // ADICIONAR ROTA
};

const tabs: TabItem[] = [
  { key: "inicio", label: "Inicio", active: true, icon: House, route: "/" },
  { key: "explorar", label: "Explorar", icon: Compass, route: "/explorar" },
  { key: "compartilhar", label: "Compartilhar", isPrimary: true, icon: Plus, route: "/compartilhar" },
  { key: "atividades", label: "Atividades", icon: Bell, route: "/atividades" },
  { key: "perfil", label: "Perfil", icon: UserRound, route: "/profile" }, // ADICIONAR ROTA
];

export default function TabBar() {
  const router = useRouter(); // ADICIONAR
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 10);

  const handleTabPress = (route: string) => { // ADICIONAR FUNÇÃO
    router.push(route);
  };

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 30,
        paddingTop: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: 14,
          paddingBottom: bottomInset,
          backgroundColor: "#fffdf9",
          shadowColor: "#1f2937",
          shadowOpacity: 0.08,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: -4 },
          elevation: 10,
        }}
      >
        {tabs.map(({ key, label, icon: Icon, active, isPrimary, route }) => {
          if (isPrimary) {
            return (
              <Pressable
                key={key}
                onPress={() => handleTabPress(route)} // ADICIONAR onPress
                accessibilityRole="button"
                style={{
                  alignItems: "center",
                  gap: 6,
                  minWidth: 66,
                  marginTop: -28,
                }}
              >
                {/* ... resto do código ... */}
              </Pressable>
            );
          }

          return (
            <Pressable
              key={key}
              onPress={() => handleTabPress(route)} // ADICIONAR onPress
              accessibilityRole="button"
              style={{
                alignItems: "center",
                gap: 6,
                minWidth: 58,
              }}
            >
              {/* ... resto do código ... */}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
```

### Passo 2: Atualizar _layout.tsx

Se precisar de uma estrutura com abas, você pode usar a estrutura de Expo Router com `(tabs)`:

```typescript
// src/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }, // Esconda a tab bar padrão
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      {/* outras telas */}
    </Tabs>
  );
}
```

### Passo 3: Estruturar o App.json (se necessário)

Adicione links deep linking no `app.json`:

```json
{
  "expo": {
    "scheme": "compartie",
    "plugins": [
      [
        "expo-router",
        {
          "origin": "https://compartie.app",
          "prefixes": [
            "https://compartie.app",
            "compartie://"
          ]
        }
      ]
    ],
    "deepLinking": {
      "schemes": ["compartie"],
      "prefixes": ["compartie://", "https://compartie.app"]
    }
  }
}
```

---

## 🔐 Autenticação com Onboarding

Implementar lógica condicional de navegação:

```typescript
// src/app/_layout.tsx
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        setIsSignedIn(!!userToken);
      } catch (e) {
        console.error("Erro ao verificar autenticação:", e);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Sua tela de splash
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="profile" />
        </>
      ) : (
        <>
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="login" />
        </>
      )}
    </Stack>
  );
}
```

---

## 🎯 Exemplo Completo de Fluxo

### 1. Usuário novo inicia o app
→ Redireciona para `/onboarding`

### 2. Usuário preenche formulário
```typescript
// em OnboardingForm.tsx
const handleSubmit = async (data: UserRegistrationData) => {
  const response = await api.registerUser(data);
  
  if (response.success) {
    // Salvar token de autenticação
    await AsyncStorage.setItem("userToken", response.token);
    
    // Redirecionar para home
    router.replace("/");
  }
};
```

### 3. Usuário autenticado vê home com TabBar
→ Pode navegar entre as abas

### 4. Ao clicar em "Perfil"
→ Navega para `/profile`

---

## 🔗 Outras Telas Recomendadas

Você pode seguir o mesmo padrão para criar:

1. **Tela de Explorar** (`/explorar`)
2. **Tela de Compartilhar** (`/compartilhar`)
3. **Tela de Atividades** (`/atividades`)
4. **Tela de Detalhes de Item** (`/item/[id]`)
5. **Tela de Editar Perfil** (`/profile/edit`)

---

## 📚 Referências

- [Expo Router Documentation](https://docs.expo.dev/routing/introduction/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

