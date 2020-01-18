import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  BackHandler,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import PostModal from "../components/PostModal";
import { Ionicons } from "@expo/vector-icons";
import CustomeHeader from "../components/CustomeHeader";
import Icon from "../components/reuseable/Icon";

const HomeScreen = props => {
  const AddButton = props => {
    return (
      <TouchableHighlight style={styles.addButton} onPress={openModal}>
        <Ionicons name="ios-add" size={28} color="white" />
      </TouchableHighlight>
    );
  };

  const defaultUser = {
    email: "",
    displayName: ""
  };

  const [user, setUser] = useState(defaultUser);
  const [modalVisiability, setModalVisiability] = useState(false);

  const path = "https://facebook.github.io/react-native/img/tiny_logo.png";

  const signOut = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(e => props.navigation.navigate("Auth"));
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setModalVisiability(true);
  };

  const closeModal = () => {
    setModalVisiability(false);
  };
  const AvatarPath = "../../assets/imgs/avatar.png";

  useEffect(() => {
    closeModal();
    const authData = firebase.auth().currentUser;
    const { uid, displayName, email } = authData;
    setUser({ ...user, email });
  }, [user.email]);
  TouchableNativeFeedback;

  return (
    <View style={styles.container}>
      <CustomeHeader title="Profile" />
      <View style={styles.container}>
        <Text>hi {user.email}</Text>
        <Button
          onPress={() => {
            signOut();
          }}
          title="Sign out"
        />
        <Image
          source={require(AvatarPath)}
          style={{ width: 100, height: 100, borderRadius: 150 }}
          resizeMode="cover"
        />
      </View>
      <Modal visible={modalVisiability} animationType="slide">
        <PostModal closeModal={closeModal} />
      </Modal>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  addButton: {
    backgroundColor: "#E9446b",
    borderRadius: 75,
    width: 55,
    height: 55,
    position: "absolute",
    right: 30,
    bottom: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
