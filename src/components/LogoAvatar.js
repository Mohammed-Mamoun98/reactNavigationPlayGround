import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const LogoAvatar = props => {
  const {
    title,
    logoUri = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={{
            uri: logoUri
          }}
          style={{ width: "80%", height: "80%" }}
          resizeMode="center"
        />
      </View>
      <Text style={styles.TitleStyle}>{title}</Text>
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }, //top = 45 or 11%
  container: {
    bottom: 10,
    left: "7%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute"
  },
  TitleStyle: {
    fontSize: 16,
    color: "gray",
    fontFamily: "open-sans",
    marginLeft: "2%"
  },
  icon: {
    marginLeft: "40%"
  }
});

export default LogoAvatar;
