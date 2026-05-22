import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#DFF2D8",
          borderTopWidth: 0,
          height: 90,
          paddingBottom: 18,
          paddingTop: 12,
        },

        tabBarShowLabel: false,
      }}
    >

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton title="Search" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="books"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton title="Books" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton title="Library" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="pets"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton title="Pets" focused={focused} />
          ),
        }}
      />

    </Tabs>
  );
}

import { StyleSheet, Text, View } from "react-native";

function TabButton({
  title,
  focused,
}: {
  title: string;
  focused: boolean;
}) {
  return (
    <View
      style={[
        styles.tabButton,
        focused && styles.activeTabButton,
      ]}
    >
      <Text
        style={[
          styles.tabText,
          focused && styles.activeTabText,
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: "#F6FFF2",
    minWidth: 85,
    alignItems: "center",
  },

  activeTabButton: {
    backgroundColor: "#4F7A4F",

    shadowColor: "#4F7A4F",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 12,

    elevation: 10,
  },

  tabText: {
    color: "#3F6F44",
    fontWeight: "700",
    fontSize: 14,
  },

  activeTabText: {
    color: "white",
  },
});