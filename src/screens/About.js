import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const About = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "Home"
          });
        }}
      >
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};

About.navigationOptions = navigationData => {
  return {
    title: "About"
  };
};

export default About;
