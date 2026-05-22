import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type BookResult = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState<BookResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function searchBooks() {
    if (!searchText.trim()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchText)}`
      );

      const data = await response.json();
      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      console.log("Search error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Books</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by title or author"
        placeholderTextColor="#7A927B"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={searchBooks}
      />

      <Pressable style={styles.button} onPress={searchBooks}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#3F6F44" />}

      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.cover_i ? (
              <Image
                source={{
                  uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
                }}
                style={styles.cover}
              />
            ) : (
              <View style={styles.noCover}>
                <Text style={styles.noCoverText}>No Cover</Text>
              </View>
            )}

            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>

              <Text style={styles.bookAuthor}>
                {item.author_name?.[0] ?? "Unknown Author"}
              </Text>

              <Text style={styles.bookYear}>
                {item.first_publish_year ?? "Unknown Year"}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF2D8",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#3F6F44",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#F6FFF2",
    borderRadius: 18,
    padding: 16,
    fontSize: 16,
    color: "#3F6F44",
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#4F7A4F",
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  list: {
    paddingBottom: 100,
  },

  card: {
    backgroundColor: "#F6FFF2",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
  },

  cover: {
    width: 70,
    height: 105,
    borderRadius: 10,
    marginRight: 14,
  },

  noCover: {
    width: 70,
    height: 105,
    borderRadius: 10,
    marginRight: 14,
    backgroundColor: "#D7EFD3",
    alignItems: "center",
    justifyContent: "center",
  },

  noCoverText: {
    color: "#5C765F",
    fontSize: 12,
    textAlign: "center",
  },

  bookInfo: {
    flex: 1,
    justifyContent: "center",
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#3F6F44",
    marginBottom: 6,
  },

  bookAuthor: {
    fontSize: 15,
    color: "#526B55",
    marginBottom: 4,
  },

  bookYear: {
    fontSize: 14,
    color: "#7A927B",
  },
});