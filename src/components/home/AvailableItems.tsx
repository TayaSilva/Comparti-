import { View } from "react-native";

import ItemCard from "@/components/home/ItemCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AvailableItems() {
  return (
    <View style={{ gap: 12 }}>
      <SectionHeader />
      <ItemCard />
    </View>
  );
}
