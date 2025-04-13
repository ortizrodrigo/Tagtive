import Ionicons from "@expo/vector-icons/Ionicons";

type IconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
};

export const IconSymbol = ({ name, size = 24, color = "black" }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} />;
};
