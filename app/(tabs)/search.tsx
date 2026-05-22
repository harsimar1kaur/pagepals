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
import { router } from "expo-router";

type BookResult = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
};

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState<BookResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function searchBooks() {
    const trimmedSearch = searchText.trim();

    if (!trimmedSearch) return;

    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(trimmedSearch)}`
      );

      const data = await response.json();
      setBooks(data.docs.slice(0, 10));
    } catch (error) {
      console.log("Search error:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  function openBook(item: BookResult) {
    router.push({
      pathname: "/book-details",
      params: {
        key: item.key,
        title: item.title,
        author: item.author_name?.[0] ?? "Unknown Author",
        coverId: item.cover_i?.toString() ?? "",
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Books</Text>

      <TextInput
        style={styles.input}
        placeholder="Search for a book"
        placeholderTextColor="#7A927B"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={searchBooks}
      />

      <Pressable style={styles.button} onPress={searchBooks}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#3F6F44" />}

      {!loading && searched && books.length === 0 && (
        <Text style={styles.noResults}>No results found</Text>
      )}

      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable style={styles.bookCard} onPress={() => openBook(item)}>
            {item.cover_i ? (
              <Image
                source={{
                  uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`,
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
            </View>
          </Pressable>
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
  noResults: {
    textAlign: "center",
    color: "#526B55",
    fontSize: 18,
    marginTop: 20,
  },
  list: {
    paddingBottom: 100,
  },
  bookCard: {
    backgroundColor: "#F6FFF2",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  cover: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 14,
  },
  noCover: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: "#D7EFD3",
    alignItems: "center",
    justifyContent: "center",
  },
  noCoverText: {
    color: "#5C765F",
    fontSize: 11,
    textAlign: "center",
  },
  bookInfo: {
    flex: 1,
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
  },
});