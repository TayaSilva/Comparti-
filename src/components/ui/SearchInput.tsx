import AppTextInput from "@/components/ui/AppTextInput";

export default function SearchInput() {
  return (
    <AppTextInput
      placeholder="Buscar"
      weight="semibold"
      style={{
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#fff",
      }}
    />
  );
}
