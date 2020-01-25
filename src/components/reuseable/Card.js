import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = props => {
  const { style } = props;
  return (
    <View style={{ ...styles.container, ...style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "65%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 20,
    backgroundColor: "#292929",
    borderRadius: 5
  }
});
export default Card;
