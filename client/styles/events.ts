import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView takes full screen height
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: Platform.OS === "android" ? 30 : 0, // Ensures the header is not touching the status bar
  },
  headerSpacer: {
    width: 24, // Matches the addButton size for centering the title
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Ensures title stays centered
  },
  headerAddButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
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
  modalContent: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
