import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";
import About from "../screens/About";
import { fromRight } from "react-navigation-transitions";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const mainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    }
  },
  {
    //all these options are in https://reactnavigation.org/docs/en/stack-navigator.html
    transitionConfig: () => fromRight(),
    headerLayoutPreset: "center", //its center in ios default,
    defaultNavigationOptions: {
      //default options for screens -Shared Style-
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "white" : ""
        // elevation: 0, // remove shadow on Android
        // shadowOpacity: 0 // remove shadow on iOS
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontSize: 25
      }
    }
  }
);

//its a separate navigator
const drawer = createDrawerNavigator({
  Home: mainNavigator,
  About: About
});

const bottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: drawer,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="home"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        }
      }
    },

    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="heart"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        }
      }
    }
  },
  {
    //these option are found in https://reactnavigation.org/docs/en/bottom-tab-navigator.html
    tabBarOptions: {
      showLabel: false
    }
  }
);

const InitNav = createAppContainer(bottomNav);
export default InitNav;
