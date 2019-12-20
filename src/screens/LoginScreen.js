import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";

const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        setError(reFormatError(error.toString()));
        setLoading(false);
      });
    setLoading(true);
  };

  useEffect(() => {});

  const reFormatError = error => {
    return error.substr(6, error.length - 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <View style={styles.input}>
        <Input
          placeholder="johnSmith@gmail.com"
          label="Email"
          value={email}
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
          value={password}
          onChangeText={password => {
            setPassword(password);
          }}
        />
      </View>
      <Text style={{ color: "red", marginTop: 25, width: "75%" }}>{error}</Text>
      <View style={{ marginTop: 100 }}>
        <Button
          title="SignIn"
          buttonStyle={{ width: "100%" }}
          onPress={handleLogin}
          loading={loading}
          raised={true}
        />
      </View>

      <TouchableOpacity
        style={{ marginTop: 25 }}
        onPress={() => {
          props.navigation.navigate("signUp");
        }}
      >
        <Text style={{ color: "gray" }}>have no Acouunt, SignUp here</Text>
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

export default LoginScreen;
