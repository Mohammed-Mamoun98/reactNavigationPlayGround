import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Card from "../components/reuseable/Card";
import Constants from "expo-constants";
import LogoAvatar from "../components/LogoAvatar";
import CardBody from "../components/reuseable/CardBody";
const CardModel = props => {
  return (
    <Card style={styles.test}>
      <CardBody />
      <LogoAvatar title="Motorola Droid" />
    </Card>
  );
};

//CardBody has Props : mainTitle: String , subTitle : String , imgUri : uri
//LogoAvatar has props : title : String ,

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    marginTop: 0,
    width: "100%",
    height: "100%"
  },
  test: {
    marginTop: 25,
    height: "45%",
    width: "95%"
  },
  info: {
    width: "90%",
    backgroundColor: "gray",
    height: "10%",
    top: "15%",
    left: "5%"
  }
});

export default CardModel;

// <TouchableWithoutFeedback
//         onPress={() => {
//           props.navigation.navigate("Post");
//         }}
//       >
//         <Text>Feed</Text>
//       </TouchableWithoutFeedback>
