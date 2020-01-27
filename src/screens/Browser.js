import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const Browser = props => {
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text>Broweser</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Browser;
