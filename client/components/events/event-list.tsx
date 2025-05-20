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

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Andrea's Party",
    date: "01/05/25",
    time: "8:00 PM",
    location: "123 Some Super Long Street",
  },
  {
    id: "2",
    title: "Joia Beach Club",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Boulevard de Asia",
  },
  {
    id: "3",
    title: "Conference",
    date: "01/05/25",
    time: "8:00 PM",
    location: "San Francisco",
  },
  {
    id: "4",
    title: "Football",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Field",
  },
  {
    id: "5",
    title: "Eureka!",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Telegraph",
  },
  {
    id: "6",
    title: "Flight to Colombia",
    date: "01/05/25",
    time: "8:00 PM",
    location: "SFO",
  },
  {
    id: "7",
    title: "CS161",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Dwinelle 155",
  },
  {
    id: "8",
    title: "Weekend Beach Trip",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Miami",
  },
  {
    id: "9",
    title: "Amber",
    date: "01/05/25",
    time: "8:00 PM",
    location: "L'Ardoise Bistro",
  },
];

export function EventList() {
  return (
    <FlatList
      data={mockEvents}
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
