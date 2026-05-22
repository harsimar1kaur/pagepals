import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>

      <Text style={styles.subtitle}>
        Organize your reading journey
      </Text>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>Want to Read</Text>
        <Text style={styles.cardSubtitle}>Books you want to start later</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>Reading</Text>
        <Text style={styles.cardSubtitle}>Books you are reading now</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>Finished</Text>
        <Text style={styles.cardSubtitle}>Books you completed</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>DNF</Text>
        <Text style={styles.cardSubtitle}>Books you did not finish</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF2D8",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#3F6F44",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 17,
    color: "#526B55",
    textAlign: "center",
    marginBottom: 26,
  },

  card: {
    backgroundColor: "#F6FFF2",
    padding: 18,
    borderRadius: 22,
    marginBottom: 14,
  },

  emoji: {
    fontSize: 28,
    marginBottom: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#3F6F44",
  },

  cardSubtitle: {
    fontSize: 15,
    color: "#5C765F",
    marginTop: 4,
  },
});