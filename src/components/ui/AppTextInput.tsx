import { forwardRef } from "react";
import {
  TextInput,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
} from "react-native";

type FontWeightVariant = "regular" | "semibold" | "bold";

type AppTextInputProps = TextInputProps & {
  weight?: FontWeightVariant;
};

const fontFamilyByWeight: Record<FontWeightVariant, string> = {
  regular: "NunitoSans_400Regular",
  semibold: "NunitoSans_600SemiBold",
  bold: "NunitoSans_700Bold",
};

const defaultTextColor = "#0B2B66";

const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  function AppTextInput({ style, weight = "regular", ...props }, ref) {
    const resolvedStyle: StyleProp<TextStyle> = [
      { fontFamily: fontFamilyByWeight[weight], color: defaultTextColor },
      style,
    ];

    return <TextInput ref={ref} {...props} style={resolvedStyle} />;
  }
);

export default AppTextInput;
