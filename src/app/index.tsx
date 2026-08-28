import { ScrollView, useWindowDimensions, View } from "react-native";

import AvailableItems from "@/components/home/AvailableItems";
import CategoriesList from "@/components/home/CategoriesList";
import HomeHeader from "@/components/home/HomeHeader";
import HomeSearch from "@/components/home/HomeSearch";
import NeighborRequests from "@/components/home/NeighborRequests";
import ShareBanner from "@/components/home/ShareBanner";
import TabBar from "@/components/navigation/TabBar";

export default function HomeScreen() {
  const { height } = useWindowDimensions();

  return (
    <View className="bg-general" style={{ flex: 1, minHeight: height }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 24,
          paddingBottom: 148,
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <HomeSearch />
        <CategoriesList />
        <AvailableItems />
        <NeighborRequests />
        <ShareBanner />
      </ScrollView>
      <TabBar />
    </View>
  );
}
