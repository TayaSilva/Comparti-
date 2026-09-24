import { View } from "react-native";

import AppText from "@/components/ui/AppText";

type StepTitleProps = {
  title: string;
  subtitle: string;
};

export default function StepTitle({ title, subtitle }: StepTitleProps) {
  return (
    <View style={{ gap: 6 }}>
      <AppText weight="bold" style={{ fontSize: 26, lineHeight: 32, color: "#0B2B66" }}>
        {title}
      </AppText>
      <AppText style={{ fontSize: 14, lineHeight: 20, color: "#30467B" }}>
        {subtitle}
      </AppText>
    </View>
  );
}
