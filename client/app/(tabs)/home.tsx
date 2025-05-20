import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "@/styles/home";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tagtive! - HOME</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
