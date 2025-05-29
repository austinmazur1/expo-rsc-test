import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs, usePathname } from "expo-router";
import { TouchableOpacity, View } from "react-native";

const Layout = () => {
  const pathname = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
              <Link href="/(authenticated)/(modal)/news" prefetch asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </Link>
            </View>
          ),
          tabBarIcon: () => (
            <Ionicons
              name={pathname.endsWith("/") ? "home" : "home-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <Ionicons
              name={pathname.includes("profile") ? "person" : "person-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pokemon"
        options={{
          title: "Pokemon",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
              <Link href="/(authenticated)/(modal)/sheet" prefetch asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </Link>
            </View>
          ),
          tabBarIcon: () => (
            <Ionicons
              name={
                pathname.includes("pokemon")
                  ? "game-controller"
                  : "game-controller-outline"
              }
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
};

const TabsLayout = () => {
  return <Layout />;
};
export default TabsLayout;
