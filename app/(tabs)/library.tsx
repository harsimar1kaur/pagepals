import { View, Text, StyleSheet, Pressable } from "react-native";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Library</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Owned Books</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Wishlist</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Borrowed</Text>
      </Pressable>

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Book</Text>
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
    marginBottom: 36,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#F6FFF2",
    paddingVertical: 22,
    borderRadius: 22,
    marginBottom: 18,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3F6F44",
  },

  addButton: {
    backgroundColor: "#4F7A4F",
    paddingVertical: 18,
    borderRadius: 22,
    marginTop: 18,
    alignItems: "center",
  },

  addButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});