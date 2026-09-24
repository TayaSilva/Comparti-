import { View } from "react-native";

import ItemCard from "@/components/home/ItemCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AvailableItems() {
  const handleViewAll = () => {
    console.log("Visualizar todos os itens disponíveis");
  };

  return (
    <View style={{ gap: 12 }}>
      <SectionHeader
        title="Disponíveis por aqui"
        actionLabel="Ver todas"
        onActionPress={handleViewAll}
      />
      <ItemCard />
    </View>
  );
}
