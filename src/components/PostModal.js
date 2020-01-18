import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomeHeader from "./CustomeHeader";
import { Input, Button } from "react-native-elements";
import Icon from "./reuseable/Icon";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import fireObjct from "../model/Fire";

import * as firebase from "firebase";
import "firebase/firestore";

const PostModal = props => {
  const AvatarPath = require("../../assets/imgs/avatar.png");

  const { closeModal } = props;

  const [postText, setPostText] = useState("");
  const [img, setImg] = useState(null);
  const [imgDim, setImgDim] = useState({ width: 0, height: 0 });

  const handleChange = text => {
    setPostText(text);
  };

  const RightComponent = () => (
    <View>
      <Text style={{ color: "white", fontSize: 18 }}>Post</Text>
    </View>
  );

  const LeftComponent = () => (
    <View>
      <Icon name="ios-close" color="white" size={30} />
    </View>
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true
    });

    if (!result.cancelled) {
      console.log(result.uri);
      console.log("height :" + result.height + " width : " + result.width);
      setImg(result.uri);
      const imgDimensions = { width: result.width, height: result.height };
      setImgDim({ ...imgDim, ...imgDimensions });
      console.log(imgDim);
    }
  };

  React.useEffect(() => {
    getPermisson();
  });

  const getPermisson = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status != "granted") alert("we need permission!");
  };

  const handlePost = () => {
    fireObjct
      .addPost({
        text: postText,
        localUri: img
      })
      .then(ref => {
        alert("done!");
        closeModal();
      })
      .catch(err => {
        alert(err);
      });
  };

  const testPost = () => {
    alert("clicked");
    firebase
      .firestore()
      .collection("test")
      .add({ text: postText })
      .then(ref => {
        alert("worked!");
      })
      .catch(err => {
        alert(err);
      });
  };
  return (
    <View style={styles.container}>
      <CustomeHeader
        isModal
        RightComponent={RightComponent}
        LeftComponent={LeftComponent}
        onLeftPress={closeModal}
        onRightPress={handlePost}
      />
      <Image source={AvatarPath} style={styles.avatar} resizeMode="cover" />
      <View style={styles.Input}>
        <Input
          placeholder="Whats in your mind?"
          numberOfLines={1}
          value={postText}
          onChangeText={handleChange}
        />
      </View>

      <View style={styles.imagePlaceHolder}>
        {!!img ? (
          <Image
            style={{ width: "100%", height: imgDim.height / 3 }}
            source={{ uri: img }}
            resizeMode="stretch"
          />
        ) : null}
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          backgroundColor: "#bbe1fa",
          height: 50,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={pickImage}
      >
        <Icon name="md-image" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 150,
    left: 10,
    position: "absolute",
    top: 100
  },
  Input: {
    position: "absolute",
    top: 120,
    left: 100,
    width: 250
  },
  imagePlaceHolder: {
    width: "80%",
    height: "50%",
    marginTop: "40%",
    alignItems: "center"
  }
});

export default PostModal;
