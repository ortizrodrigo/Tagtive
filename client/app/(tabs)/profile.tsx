import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "@/styles/profile"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - PROFILE</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
