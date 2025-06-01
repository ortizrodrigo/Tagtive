import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { styles } from "@/styles/events";
import { EventList } from "@/components/events/event-list";
import { EventListHeader } from "@/components/events/event-list-header";

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <EventListHeader />
      <EventList />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
