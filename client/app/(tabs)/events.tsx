import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { styles } from "@/styles/events";
import { EventList } from "@/components/events/event-list";

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - EVENTS</Text>
      <EventList />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
