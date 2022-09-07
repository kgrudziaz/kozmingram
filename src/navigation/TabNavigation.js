import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import Photos from "../screens/NewsFeed";
import Search from "../screens/Search";

// import AddTodo from "../../assets/icons/AddTodo";
// import Profile from "../../assets/icons/Profile";

const styles = StyleSheet.create({
  bar: {
    height: 70,
  },
});

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName={routes.NEWS_FEED.SEARCH}
      screenOptions={{
      //   headerShown: false,
      //   tabBarShowLabel: false,
      tabBarStyle: styles.bar,
      //   tabBarActiveTintColor: "#161616",
      //   tabBarInactiveTintColor: "#D5D4D4",

      }}
    >
      <Tab.Screen
        name="News Feed"
        component={Photos}
        options={{
          tabBarIcon: (props) => <Photos {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: (props) => <Search {...props} />,
        }}
      />
      
    </Tab.Navigator>
  );
}

export default HomeNavigator;
