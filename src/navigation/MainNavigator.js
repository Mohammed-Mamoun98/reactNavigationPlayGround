import NotificationScreen from "../screens/NotificationScreen";
import PostScreen from "../screens/PostScreen";
import MessegesScreen from "../screens/MessegesScreen";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StyleSheet } from "react-native";
const AppBottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="home" size={24} color={tintColor} />
        )
      }
    },
    Message: {
      screen: MessegesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="message-outline"
            size={24}
            color={tintColor}
          />
        )
      }
    },

    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-add-circle"
            size={48}
            color="#E9446b"
            style={styles.shadow}
          />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#161f3D",
      inactiveTintColor: "#BBBBc4"
    }
  }
);

const styles = StyleSheet.create({
  addIcon: {
    shadowColor: "#E9446A",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  shadow: {
    shadowColor: "#E9446A",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8
  }
});

export default AppBottomNav;
