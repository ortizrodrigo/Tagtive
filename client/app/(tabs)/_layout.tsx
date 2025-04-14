import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='chats'
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='chatbubbles-sharp' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='feed'
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='grid' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='events'
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='calendar' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='person-circle-sharp' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
