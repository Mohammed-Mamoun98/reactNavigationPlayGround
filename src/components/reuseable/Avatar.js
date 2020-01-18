import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Avatar = props => {
  const { imgUri } = props;
  const uri =  !!imgUri ?  imgUri : "https://facebook.github.io/react-native/img/tiny_logo.png"  ;

  return (
    
      <Image source={{uri}} style={{ width: 100, height: 100 , borderRadius : 150 }} resizeMode = 'cover' />
    
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  }
});
export default Avatar;
