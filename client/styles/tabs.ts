import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const tabStyles = (colorScheme: "light" | "dark") => {
  return StyleSheet.create({
    tabIcon: {
      color: Colors[colorScheme].tint,
    },
    activeTabText: {
      color: Colors[colorScheme].tabTextSelected,
    },
    inactiveTabText: {
      color: Colors[colorScheme].tabTextDefault,
    },
  });
};
