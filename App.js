import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import Navigator from "./src/navigation/navigation";
import { mainStore, rootReducer } from "./src/redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import * as firebase from "firebase";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { fromRight } from "react-navigation-transitions";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import AppBottomNav from "./src/navigation/MainNavigator";

const firebaseConfig = {
  apiKey: "AIzaSyDsQ6onrzyvfDnKksCm-CPnMWd0b_ZcA1g",
  authDomain: "socialapp-f6387.firebaseapp.com",
  databaseURL: "https://socialapp-f6387.firebaseio.com",
  projectId: "socialapp-f6387",
  storageBucket: "socialapp-f6387.appspot.com",
  messagingSenderId: "741700435383",
  appId: "1:741700435383:web:e61700bcb6d0c86244fc32"
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator(
  {
    login: LoginScreen,
    signUp: SignUpScreen,
    loading: LoadingScreen
  },
  {
    transitionConfig: () => fromRight()
  }
);
const newNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppBottomNav,
  Auth: AuthStack
});

const NewAppContainer = createAppContainer(newNavigator);

//
enableScreens();

// export function App() {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   if (!fontLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setFontLoaded(true)}
//       />
//     );
//   }

//   // return <MealsNavigator />;
// }

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => {
    console.log("Done!");
  });

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  //   // return <MealsNavigator />;
  else {
    return <NewAppContainer />;
  }
};
// export default newAppContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// const Nav = props => {
//   mainStore.subscribe(() => {
//     console.log(mainStore.getState());
//   });
//   return (
//     <Provider store={mainStore}>
//       <SignUpScreen />
//       {/* <Navigator /> */}
//     </Provider>
//   );
// };
