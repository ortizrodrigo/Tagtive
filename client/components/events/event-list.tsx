import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { EventCard, EventType } from "./event-card";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  eventType: EventType;
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Andrea's Party",
    date: "01/05/25",
    time: "8:00 PM",
    location: "123 Some Street",
    eventType: "Social",
  },
  {
    id: "2",
    title: "Joia Beach Club",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Boulevard de Asia",
    eventType: "Entertainment",
  },
  {
    id: "3",
    title: "Conference",
    date: "01/05/25",
    time: "8:00 PM",
    location: "San Francisco",
    eventType: "Work",
  },
  {
    id: "4",
    title: "Football",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Field",
    eventType: "Sports",
  },
  {
    id: "5",
    title: "Eureka!",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Telegraph",
    eventType: "Dining",
  },
  {
    id: "6",
    title: "Flight to Colombia",
    date: "01/05/25",
    time: "8:00 PM",
    location: "SFO",
    eventType: "Flight",
  },
  {
    id: "7",
    title: "CS161",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Dwinelle 155",
    eventType: "Education",
  },
  {
    id: "8",
    title: "Weekend Beach Trip",
    date: "01/05/25",
    time: "8:00 PM",
    location: "Miami",
    eventType: "Trip",
  },
  {
    id: "9",
    title: "Amber",
    date: "01/05/25",
    time: "8:00 PM",
    location: "L'Ardoise Bistro",
    eventType: "Date",
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
          eventType={item.eventType}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 16,
  },
});
