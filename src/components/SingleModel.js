import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardModel from "./CardModel";
import Touchable from "./Touchable";
const SingleModel = props => {
  return (
    <Touchable>
      <CardModel />
    </Touchable>
  );
};

export default SingleModel;
