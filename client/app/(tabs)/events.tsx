import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "@/styles/events";

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - EVENTS</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
