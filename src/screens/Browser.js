import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import CardModel from "../components/CardModel";
const Browser = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "red", flex: 1 }}
    >
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
        <CardModel />
      </View>
    </ScrollView>
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
