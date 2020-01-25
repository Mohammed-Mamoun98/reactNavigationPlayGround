import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Feed from "../screens/Feed";
import React from "react";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import navStackOptions from "./navStackOptions";
import PostScreen from "../screens/PostScreen";

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed
    },
    Post: {
      screen: PostScreen
    }
  },
  navStackOptions
);

const bottomTab = createBottomTabNavigator(
  {
    FeedTab: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={24} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-bookmark" size={28} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#E5E5E5",
      activeBackgroundColor: "#292929",
      inactiveBackgroundColor: "#292929"
    }
  }
);

export default bottomTab;
