import { forwardRef } from "react";
import {
  Text,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from "react-native";

type FontWeightVariant = "regular" | "semibold" | "bold";

type AppTextProps = TextProps & {
  weight?: FontWeightVariant;
};

const fontFamilyByWeight: Record<FontWeightVariant, string> = {
  regular: "NunitoSans_400Regular",
  semibold: "NunitoSans_600SemiBold",
  bold: "NunitoSans_700Bold",
};

const defaultTextColor = "#0B2B66";

const AppText = forwardRef<Text, AppTextProps>(function AppText(
  { style, weight = "regular", ...props },
  ref
) {
  const resolvedStyle: StyleProp<TextStyle> = [
    { fontFamily: fontFamilyByWeight[weight], color: defaultTextColor },
    style,
  ];

  return <Text ref={ref} {...props} style={resolvedStyle} />;
});

export default AppText;
