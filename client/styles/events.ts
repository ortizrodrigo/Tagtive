import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView takes full screen height
  },
  flatList: {
    flex: 1, // Ensures FlatList takes full width and height of parent
  },
  list: {
    paddingHorizontal: 16, // Horizontal padding for cards
    paddingBottom: 16, // Bottom padding for scroll
  },
  card: {
    alignSelf: "stretch", // Stretches to fill parent (FlatList content width)
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: "#fff", // Fallback for non-themed preview
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    flexWrap: "nowrap", // Prevents wrapping to ensure truncation works
  },
  icon: {
    marginRight: 4,
    marginBottom: 4,
  },
  inlineIcon: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    flexShrink: 1, // Ensures title text doesn't overflow
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
    flexShrink: 0, // Date and time should not shrink
  },
  location: {
    fontSize: 14,
    marginBottom: 4,
    flexShrink: 1, // Allows location to shrink and truncate
    overflow: "hidden",
  },
});
