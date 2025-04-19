import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { EventCard, EventType } from "./event-card";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  eventType: EventType;
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Andrea's Party",
    date: "2025-05-01",
    location: "123 Some Street",
    eventType: "Social",
  },
  {
    id: "2",
    title: "Joia Beach Club",
    date: "2025-05-10",
    location: "Boulevard de Asia",
    eventType: "Entertainment",
  },
  {
    id: "3",
    title: "Conference",
    date: "2025-05-15",
    location: "San Francisco",
    eventType: "Work",
  },
  {
    id: "4",
    title: "Football",
    date: "2025-05-15",
    location: "Field",
    eventType: "Sports",
  },
  {
    id: "5",
    title: "Eureka!",
    date: "2025-05-15",
    location: "Telegraph",
    eventType: "Dining",
  },
  {
    id: "6",
    title: "Flight to Colombia",
    date: "2025-05-15",
    location: "SFO",
    eventType: "Flight",
  },
  {
    id: "7",
    title: "Colombia",
    date: "2025-05-15",
    location: "AMC Lincoln Square",
    eventType: "Education",
  },
  {
    id: "8",
    title: "Weekend Beach Trip",
    date: "2025-05-15",
    location: "Miami",
    eventType: "Trip",
  },
  {
    id: "9",
    title: "Amber",
    date: "2025-05-15",
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
