import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { styles } from "@/styles/events";

export type EventType =
  | "Work"
  | "Social"
  | "Dining"
  | "Sports"
  | "Entertainment"
  | "Flight"
  | "Education"
  | "Trip"
  | "Date";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  eventType: EventType;
};

const eventIconMap: Record<EventType, string> = {
  Work: "briefcase-outline",
  Social: "people-outline",
  Dining: "restaurant-outline",
  Sports: "body-outline",
  Entertainment: "ticket-outline",
  Flight: "airplane-outline",
  Education: "library-outline",
  Trip: "calendar-outline",
  Date: "wine-outline",
};

export function EventCard({
  title,
  date,
  location,
  eventType,
}: EventCardProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <View
      style={[styles.card, { backgroundColor: Colors[colorScheme].background }]}
    >
      <View style={styles.titleRow}>
        <Ionicons
          name={
            eventIconMap[eventType] as React.ComponentProps<
              typeof Ionicons
            >["name"]
          }
          size={24}
          color={Colors[colorScheme].aquaBlue}
          style={styles.icon}
        />
        <Text
          numberOfLines={1}
          style={[styles.title, { color: Colors[colorScheme].coralRed }]}
        >
          {title}
        </Text>
      </View>
      <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
        Date: {date}
      </Text>
      <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
        Location: {location}
      </Text>
    </View>
  );
}
