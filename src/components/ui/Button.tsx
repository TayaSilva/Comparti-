import { Pressable, type PressableProps } from "react-native";

import AppText from "@/components/ui/AppText";

type ButtonProps = PressableProps & {
  label?: string;
};

export default function Button({ label = "Button", ...props }: ButtonProps) {
  return (
    <Pressable
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 14,
        backgroundColor: "#d97706",
      }}
      {...props}
    >
      <AppText weight="semibold" style={{ color: "#fff" }}>
        {label}
      </AppText>
    </Pressable>
  );
}
