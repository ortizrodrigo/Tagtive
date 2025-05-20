import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { styles } from "@/styles/events";

type EventCardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
};

export function EventCard({ title, date, time, location }: EventCardProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <View
      style={[styles.card, { backgroundColor: Colors[colorScheme].background }]}
    >
      {/* Title Row */}
      <View style={styles.titleRow}>
        <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
          {title}
        </Text>
      </View>
      {/* Date and Location Row */}
      <View style={styles.detailRow}>
        <Ionicons
          name='today-outline'
          size={18}
          color={Colors[colorScheme].icon}
          style={styles.icon}
        />
        <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
          {date}
        </Text>
        <Text style={[styles.detail, { color: Colors[colorScheme].text }]}>
          , {time}
        </Text>
        <Ionicons
          name='location-outline'
          size={18}
          color={Colors[colorScheme].icon}
          style={styles.inlineIcon}
        />
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={[styles.location, { color: Colors[colorScheme].text }]}
        >
          {location}
        </Text>
      </View>
    </View>
  );
}
