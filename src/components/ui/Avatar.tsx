import { Text, View } from "react-native";
import { Image } from "expo-image";

type AvatarProps = {
  imageUri?: string | null;
  name?: string;
  size?: number;
};

function getInitials(name?: string) {
  if (!name) return "CM";

  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "CM";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

export default function Avatar({
  imageUri,
  name = "Carla Mendes",
  size = 40,
}: AvatarProps) {
  const initials = getInitials(name);

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#FED7AA",
      }}
    >
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          contentFit="cover"
          style={{ width: size, height: size }}
        />
      ) : (
        <Text
          style={{
            fontSize: size * 0.34,
            fontWeight: "700",
            color: "#9A3412",
          }}
        >
          {initials}
        </Text>
      )}
    </View>
  );
}
