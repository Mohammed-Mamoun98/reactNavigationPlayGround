import React from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";

const Touchable = props => {
  return (
    <TouchableOpacity
      style={{ width: "100%", height: "100%", flex: 1, alignItems: "center" }}
      onPress={props.onPress}
    >
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default Touchable;
