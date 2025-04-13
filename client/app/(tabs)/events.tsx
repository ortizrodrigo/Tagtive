import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");
  console.log(require("@/assets/images/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Tagtive! - EVENTS
      </Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
