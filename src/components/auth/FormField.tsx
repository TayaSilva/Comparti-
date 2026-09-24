import { forwardRef, useState } from "react";
import type { ComponentProps, ComponentType } from "react";
import {
  Pressable,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from "react-native";
import { Eye, EyeOff, User } from "lucide-react-native";

import AppText from "@/components/ui/AppText";
import AppTextInput from "@/components/ui/AppTextInput";

type IconProps = ComponentProps<typeof User>;

type FormFieldProps = Omit<TextInputProps, "style"> & {
  label: string;
  icon?: ComponentType<IconProps>;
  error?: string;
  isPassword?: boolean;
  style?: StyleProp<ViewStyle>;
};

const FormField = forwardRef<TextInput, FormFieldProps>(function FormField(
  { label, icon: Icon, error, isPassword = false, style, ...inputProps },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const borderColor = error ? "#EF4444" : isFocused ? "#F97316" : "#E2E8F0";

  const containerStyle: StyleProp<ViewStyle> = [{ gap: 8 }, style];

  return (
    <View style={containerStyle}>
      <AppText weight="bold" style={{ fontSize: 14, color: "#0B2239" }}>
        {label}
      </AppText>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 14,
          borderRadius: 12,
          borderWidth: 1,
          borderColor,
          backgroundColor: "#FFFFFF",
          gap: 10,
        }}
      >
        {Icon ? <Icon color="#64748B" size={18} strokeWidth={1.8} /> : null}
        <AppTextInput
          ref={ref}
          {...inputProps}
          secureTextEntry={isPassword && isHidden}
          onFocus={(event) => {
            setIsFocused(true);
            inputProps.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            inputProps.onBlur?.(event);
          }}
          placeholderTextColor="#94A3B8"
          style={{ flex: 1, minWidth: 0, fontSize: 14, padding: 0 }}
        />
        {isPassword ? (
          <Pressable
            onPress={() => setIsHidden((current) => !current)}
            accessibilityRole="button"
            accessibilityLabel={isHidden ? "Mostrar senha" : "Ocultar senha"}
            hitSlop={10}
          >
            {isHidden ? (
              <Eye color="#30467B" size={20} strokeWidth={1.8} />
            ) : (
              <EyeOff color="#30467B" size={20} strokeWidth={1.8} />
            )}
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <AppText style={{ fontSize: 12, color: "#EF4444" }}>{error}</AppText>
      ) : null}
    </View>
  );
});

export default FormField;
