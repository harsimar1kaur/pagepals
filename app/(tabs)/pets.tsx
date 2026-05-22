import { View, Text, StyleSheet } from "react-native";

export default function PetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Pet</Text>
      <Text style={styles.pet}>🐸</Text>
      <Text style={styles.subtitle}>Level 1 Reading Pal</Text>
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
    marginBottom: 24,
  },
  pet: {
    fontSize: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#526B55",
    textAlign: "center",
  },
});