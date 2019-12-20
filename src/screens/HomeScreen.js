import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import LoadingScreen from "./LoadingScreen";
const HomeScreen = props => {
  const defaultUser = {
    email: "",
    displayName: ""
  };

  const [user, setUser] = useState(defaultUser);

  //   useEffect(() => {
  //     const { email, displayName } = firebase.auth().currentUser;
  //     console.log("hello", firebase.auth().currentUser);
  //     console.log(firebase.auth().currentUser);
  //     setUser({ email, displayName });
  //   });

  const signOut = () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const Email = firebase.auth().currentUser.email;
    setUser({ ...user, email: Email });
  }, [user.email]);
  return (
    <View style={styles.container}>
      {/* {user.email !== "" ? (
        <View style={styles.container}>
          {true && <Text>hi {user.email}</Text>}
          <Button
            onPress={() => {
              signOut();
            }}
            title="Sign out"
          />
        </View>
      ) : (
        <LoadingScreen />
      )} */}
      <View style={styles.container}>
        {true && <Text>hi {user.email}</Text>}
        <Button
          onPress={() => {
            signOut();
          }}
          title="Sign out"
        />
      </View>
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

export default HomeScreen;
