import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";

const LoadingScreen = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? "App" : "Auth");
    });
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70}></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingScreen;
