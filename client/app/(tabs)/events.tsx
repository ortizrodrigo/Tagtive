import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { styles } from "@/styles/events";
import { EventList } from "@/components/events/event-list";
import { EventListHeader } from "@/components/events/events-header";
import { EventModal } from "@/components/events/add-event-modal";
import { useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
};

export default function EventsScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Andrea's Party",
      date: "01/05/25",
      time: "8:00 PM",
      location: "123 Some Super Long Street",
    },
  ]);

  const addEvent = (newEvent: Omit<Event, "id">) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        id: `${prevEvents.length + 1}`,
        ...newEvent,
      },
    ]);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <SafeAreaView style={styles.container}>
      <EventListHeader onAddPress={() => setIsModalOpen(true)} />
      <EventList events={events} />
      <StatusBar style='auto' />
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEvent={addEvent}
      />
    </SafeAreaView>
  );
}
