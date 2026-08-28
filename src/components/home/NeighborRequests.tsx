import { View } from "react-native";

import RequestCard from "@/components/home/RequestCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NeighborRequests() {
  return (
    <View style={{ gap: 12 }}>
      <SectionHeader />
      <RequestCard />
      <RequestCard />
    </View>
  );
}
