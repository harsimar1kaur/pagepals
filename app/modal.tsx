import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PagePals</Text>

      <Text style={styles.subtitle}>
        This page will be used for settings or special events later.
      </Text>

      <Link href="/(tabs)" style={styles.button}>
        Back Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF2D8",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#3F6F44",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: "#526B55",
    textAlign: "center",
    maxWidth: 300,
    marginBottom: 28,
  },

  button: {
    backgroundColor: "#4F7A4F",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 20,
    overflow: "hidden",
  },
});