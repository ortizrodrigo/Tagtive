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
  time: string;
  location: string;
  eventType: EventType;
};

const eventIconMap: Record<EventType, string> = {
  Work: "business-outline",
  Social: "people-outline",
  Dining: "restaurant-outline",
  Sports: "fitness-outline",
  Entertainment: "ticket-outline",
  Flight: "airplane-outline",
  Education: "library-outline",
  Trip: "calendar-outline",
  Date: "wine-outline",
};

export function EventCard({
  title,
  date,
  time,
  location,
  eventType,
}: EventCardProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <View
      style={[styles.card, { backgroundColor: Colors[colorScheme].background }]}
    >
      {/* Title Row */}
      <View style={styles.titleRow}>
        <Ionicons
          name={
            eventIconMap[eventType] as React.ComponentProps<
              typeof Ionicons
            >["name"]
          }
          size={24}
          color={Colors[colorScheme].coralRed}
          style={styles.icon}
        />
        <Text style={[styles.title, { color: Colors[colorScheme].coralRed }]}>
          {title}
        </Text>
      </View>
      {/* Date Row */}
      <View style={styles.titleRow}>
        <Ionicons
          name='today-outline'
          size={18}
          color={Colors[colorScheme].aquaBlue}
          style={styles.icon}
        />
        <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
          {date}
        </Text>
        <Ionicons
          name='time-outline'
          size={18}
          color={Colors[colorScheme].aquaBlue}
          style={styles.inlineIcon}
        />
        <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
          {time}
        </Text>
      </View>
      {/* Location Row */}
      <View style={styles.titleRow}>
        <Ionicons
          name='location-outline'
          size={18}
          color={Colors[colorScheme].aquaBlue}
          style={styles.icon}
        />
        <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
          {location}
        </Text>
      </View>
    </View>
  );
}
