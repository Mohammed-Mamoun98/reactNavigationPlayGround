import React, { Children } from "react";
import { View, Text } from "react-native";
import Card from "./Card";

const newsCard = props => {
  return <Card>{Children}</Card>;
};

export default newsCard;
