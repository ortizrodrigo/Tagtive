import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "@/styles/feed";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - FEED</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
