import { View } from "react-native";

import RequestCard from "@/components/home/RequestCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NeighborRequests() {
  const handleViewAll = () => {
    console.log("Visualizar todos os pedidos de vizinhos");
  };

  return (
    <View style={{ gap: 12 }}>
      <SectionHeader
        title="Seus vizinhos estão procurando"
        actionLabel="Ver todas"
        onActionPress={handleViewAll}
      />
      <RequestCard />
    </View>
  );
}
