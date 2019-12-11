import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";

const Home = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder="BASIC INPUT" errorMessage="" />

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "About"
          });
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

Home.navigationOptions = navigationData => {
  return {
    title: "Home"
  };
};

export default Home;
