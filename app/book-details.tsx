import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function BookDetailsScreen() {
  const { key, title, author, coverId } = useLocalSearchParams<{
    key: string;
    title: string;
    author: string;
    coverId: string;
  }>();

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Want to Read");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    async function loadBookDetails() {
      try {
        const response = await fetch(`https://openlibrary.org${key}.json`);
        const data = await response.json();

        if (typeof data.description === "string") {
          setDescription(data.description);
        } else if (data.description?.value) {
          setDescription(data.description.value);
        } else {
          setDescription("No description available for this book yet.");
        }
      } catch (error) {
        console.log("Book details error:", error);
        setDescription("Could not load the book description.");
      } finally {
        setLoading(false);
      }
    }

    if (key) {
      loadBookDetails();
    }
  }, [key]);

  function selectStatus(newStatus: string) {
    setStatus(newStatus);
    setShowMenu(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {coverId ? (
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
          }}
          style={styles.cover}
        />
      ) : (
        <View style={styles.noCover}>
          <Text style={styles.noCoverText}>No Cover</Text>
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>

      <Pressable
        style={styles.statusButton}
        onPress={() => setShowMenu(!showMenu)}
      >
        <Text style={styles.statusButtonText}>{status} ▼</Text>
      </Pressable>

      {showMenu && (
        <View style={styles.dropdown}>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => selectStatus("Want to Read")}
          >
            <Text style={styles.dropdownText}>Want to Read</Text>
          </Pressable>

          <Pressable
            style={styles.dropdownItem}
            onPress={() => selectStatus("Currently Reading")}
          >
            <Text style={styles.dropdownText}>Currently Reading</Text>
          </Pressable>

          <Pressable
            style={styles.dropdownItem}
            onPress={() => selectStatus("Finished")}
          >
            <Text style={styles.dropdownText}>Finished</Text>
          </Pressable>

          <Pressable
            style={styles.dropdownItem}
            onPress={() => selectStatus("DNF")}
          >
            <Text style={styles.dropdownText}>DNF</Text>
          </Pressable>
        </View>
      )}

      <Text style={styles.sectionTitle}>Description</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#3F6F44" />
      ) : (
        <Text style={styles.description}>{description}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFF2D8",
    alignItems: "center",
    padding: 24,
    paddingTop: 70,
    minHeight: "100%",
  },

  cover: {
    width: 170,
    height: 255,
    borderRadius: 14,
    marginBottom: 24,
  },

  noCover: {
    width: 170,
    height: 255,
    borderRadius: 14,
    backgroundColor: "#F6FFF2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  noCoverText: {
    color: "#5C765F",
    fontSize: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#3F6F44",
    textAlign: "center",
    marginBottom: 8,
  },

  author: {
    fontSize: 18,
    color: "#526B55",
    textAlign: "center",
    marginBottom: 24,
  },

  statusButton: {
    backgroundColor: "#4F7A4F",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 16,
    marginBottom: 16,
  },

  statusButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  dropdown: {
    backgroundColor: "#F6FFF2",
    borderRadius: 16,
    width: "100%",
    marginBottom: 24,
    overflow: "hidden",
  },

  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#D7EFD3",
  },

  dropdownText: {
    fontSize: 16,
    color: "#3F6F44",
    fontWeight: "600",
    textAlign: "center",
  },

  sectionTitle: {
    alignSelf: "flex-start",
    fontSize: 22,
    fontWeight: "800",
    color: "#3F6F44",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#526B55",
    lineHeight: 24,
  },
});