import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList
} from "react-native";
import Card from "../components/reuseable/Card";
import Constants from "expo-constants";
import CardModel from "../components/CardModel";
import LogoAvatar from "../components/LogoAvatar";
import CardBody from "../components/reuseable/CardBody";
const Feed = props => {
  return (
    <View style={styles.container}>
      <CardModel />
      <CardModel />
      <FlatList />
    </View>
  );
};

Feed.navigationOptions = navigationData => {
  return {
    title: "Feed",
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%"
  },
  test: {
    marginTop: 25,
    height: "40%",
    width: "95%"
  }
});

export default Feed;

// <TouchableWithoutFeedback
//         onPress={() => {
//           props.navigation.navigate("Post");
//         }}
//       >
//         <Text>Feed</Text>
//       </TouchableWithoutFeedback>
