import { TextInput } from "react-native";

export default function SearchInput() {
  return (
    <TextInput
      placeholder="Buscar"
      style={{
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#fff",
      }}
    />
  );
}
