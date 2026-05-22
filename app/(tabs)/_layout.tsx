import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#F6FFF2",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },

        tabBarActiveTintColor: "#3F6F44",
        tabBarInactiveTintColor: "#7A927B",

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />
      
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
        }}
      />

      <Tabs.Screen
        name="pets"
        options={{
          title: "Pets",
        }}
      />
    </Tabs>
  );
}