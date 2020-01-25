import { fromRight } from "react-navigation-transitions";

const navStackOptions = {
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
      fontSize: 25,
      fontFamily: "Roboto"
    }
  }
};

export default navStackOptions;
