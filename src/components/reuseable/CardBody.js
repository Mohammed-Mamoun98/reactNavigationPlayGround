import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardBody = props => {
  const {
    mainTitle = "Main Header Title ", //no more than 50 chars
    subTitle = "SubTitle", // more than 38 add three dots
    imgUri = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",
    url = 'https://en.reactjs.org/'
  } = props;

  const formatSubTitle = (title = "") => {
    const titleLength = title.length;
    let newTitle = "";
    titleLength > 45
      ? (newTitle = title.substring(0, 45) + "...")
      : (newTitle = title);
    return newTitle;
  };
  return (
    <View style={styles.body}>
      <View style={styles.hero}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <Text style={styles.subTitle}>{formatSubTitle(subTitle)}</Text>
      </View>
      {!!imgUri && (
        <View style={styles.imgPlaceholder}>
          <Image
            source={{
              uri: imgUri
            }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="center"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "90%",
    height: "65%",
    top: "8%",
    left: "7%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "3%",
    borderRadius: 20
  },
  imgPlaceholder: {
    flex: 1.7,
    height: "70%",
    borderRadius: 15,
    alignItems: "center"
  },
  hero: {
    flex: 3,
    borderRadius: 15
  },
  mainTitle: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 23
  },
  subTitle: {
    color: "gray",
    fontFamily: "open-sans",
    fontSize: 16
  }
});

export default CardBody;

// shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,

// const reactLogoUri =
// "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png";
