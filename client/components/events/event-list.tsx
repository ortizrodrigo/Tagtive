import { FlatList } from "react-native";
import { EventCard } from "./event-card";
import { styles } from "@/styles/events";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
};

type EventListProps = {
  events: Event[];
};

export function EventList({ events }: EventListProps) {
  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EventCard
          title={item.title}
          date={item.date}
          time={item.time}
          location={item.location}
        />
      )}
      contentContainerStyle={styles.list}
      style={styles.flatList}
    />
  );
}
