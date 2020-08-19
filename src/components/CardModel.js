import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Card from "../components/reuseable/Card";
import Constants from "expo-constants";
import LogoAvatar from "../components/LogoAvatar";
import CardBody from "../components/reuseable/CardBody";
import Touchable from "./Touchable";
const CardModel = props => {
  return (
    <Touchable
      onPress={() => {
        props.navigation.navigate("Browser");
      }}
    >
      <Card style={styles.test}>
        <CardBody
          mainTitle="Main Header Title "
          subTitle="SubTitle"
          imgUri="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
          url="https://en.reactjs.org/"
        />
        <LogoAvatar
          title="Motorola Droid"
          logoUri="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
        />
      </Card>
    </Touchable>
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
    width: "95%",
    height: "40%",
    minHeight: "90%"
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
