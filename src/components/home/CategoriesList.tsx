import { ScrollView, View } from "react-native";

import CategoryCard from "@/components/home/CategoryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { categories } from "@/mocks/categories";

export default function CategoriesList() {
  return (
    <View style={{ gap: 12 }}>
      <SectionHeader title="Categorias"  />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 6 }}
      >
        <View style={{ flexDirection: "row", gap: 18 }}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              label={category.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
