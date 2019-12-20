import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";

const SignUpScreen = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => setError(""))
      .catch(error => setError(error.toString()));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SignUp</Text>
      <View style={styles.input}>
        <Input
          placeholder="john Smith"
          label="FullName"
          onChangeText={name => {
            setName(name);
          }}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder="johnSmith@gmail.com"
          label="Email"
          onChangeText={email => {
            setEmail(email);
          }}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder="*******"
          label="Password"
          secureTextEntry
          onChangeText={password => {
            setPassword(password);
          }}
        />
      </View>

      <Text style={{ color: "red", marginTop: 25, width: "75%" }}>{error}</Text>

      <View style={{ marginTop: 100 }}>
        <Button
          title="SignUp"
          buttonStyle={{ width: "100%" }}
          onPress={handleSignUp}
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 25 }}
        onPress={() => {
          props.navigation.navigate("login");
        }}
      >
        <Text style={{ color: "gray" }}>
          already have an Acouunt, SignIn here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    color: "gray"
  },
  input: {
    marginTop: 15,
    width: "75%"
  }
});

export default SignUpScreen;
