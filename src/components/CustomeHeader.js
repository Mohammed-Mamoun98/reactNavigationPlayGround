import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

const IconButton = props => <View></View>;

const CustomeHeader = props => {
  const {
    title,
    RightComponent,
    LeftComponent,
    isModal = false,
    titleStyle,
    onLeftPress,
    onRightPress,
    navigation
  } = props;
  const heighToStatusBar = isModal ? 0 : Constants.statusBarHeight;

  return (
    <View style={{ ...styles.container, marginTop: heighToStatusBar }}>
      <View style={styles.leftIcon}>
        <TouchableOpacity onPress={onLeftPress}>
          {!!LeftComponent ? <LeftComponent /> : null}
        </TouchableOpacity>
      </View>
      <View style={styles.rightIcon}>
        <TouchableOpacity onPress={onRightPress}>
          {!!RightComponent ? <RightComponent /> : null}
        </TouchableOpacity>
      </View>

      <Text style={styles.defaultTitleStyle}>{!!title ? title : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: "#1b262c",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11
  },
  leftIcon: {
    position: "absolute",
    left: 20
  },
  rightIcon: {
    position: "absolute",
    right: 20
  },
  defaultTitleStyle: {
    color: "white",
    fontSize: 21
  }
});
export default CustomeHeader;
