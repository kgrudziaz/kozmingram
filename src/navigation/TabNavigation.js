import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import Photos from "../screens/NewsFeed";
import Search from "../screens/Search";


const styles = StyleSheet.create({
  bar: {
    height: 90,
  },
});

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
      headerShown: false,
      //tabBarShowLabel: false,
      tabBarStyle: styles.bar,
      tabBarActiveTintColor: "#161616",
      tabBarInactiveTintColor: "#D5D4D4",

      }}
    >
      <Tab.Screen
        name="Home"
        component={Photos}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      
    </Tab.Navigator>
  );
}

export default HomeNavigator;
