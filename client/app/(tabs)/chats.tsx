import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "@/styles/chats";

export default function ChatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - CHATS</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
