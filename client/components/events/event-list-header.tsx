import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { styles } from "@/styles/events";

export function EventListHeader() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSpacer} />
      <Text style={[styles.headerTitle, { color: Colors[colorScheme].text }]}>
        Events
      </Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name='add' size={24} color={Colors[colorScheme].icon} />
      </TouchableOpacity>
    </View>
  );
}
