import React from "react";
import { View, Text } from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";

const Textfield = props => {
  return <TextField label="Phone number" keyboardType="phone-pad" {...props} />;
};

export default Textfield;
