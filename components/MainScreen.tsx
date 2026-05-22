import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PagePals</Text>

      <Text style={styles.tagline}>
        Track your books and grow your pets while you read
      </Text>

      <View style={styles.petCircle}>
        <Text style={styles.pet}>🐸</Text>
      </View>

      <Text style={styles.smallText}>
        Every page helps your little pal grow.
      </Text>

      <Link href="/(tabs)/books" style={styles.button}>
        Begin
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

  logo: {
    fontSize: 52,
    fontWeight: "800",
    color: "#3F6F44",
    marginBottom: 12,
  },

  tagline: {
    fontSize: 18,
    color: "#526B55",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 36,
    maxWidth: 320,
  },

  petCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#F6FFF2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  pet: {
    fontSize: 92,
  },

  smallText: {
    fontSize: 16,
    color: "#5C765F",
    textAlign: "center",
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