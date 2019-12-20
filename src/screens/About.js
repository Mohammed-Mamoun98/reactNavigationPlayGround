import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-elements";
import { valueArray } from "../data/dummyData";

const About = props => {
  const [searchValue, setSearchValue] = useState("");
  const [queryArray, setQueryArray] = useState(valueArray);

  const handleChange = value => {
    console.log(searchValue);

    setSearchValue(value);
    setQueryArray(handleFilter(value));
  };

  const handleFilter = searchValue => {
    return valueArray.filter(element => {
      return element.toLowerCase().search(searchValue) !== -1;
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "Home"
          });
        }}
        style={{ width: "100%" }}
      >
        <Text>About</Text>
      </TouchableOpacity>

      <View style={{ width: "100%" }}>
        <SearchBar
          placeholder="Search..."
          style={{ width: "100%", backgroundColor: "white" }}
          round={true}
          value={searchValue}
          onChangeText={handleChange}
          lightTheme={true}
          onClear={() => {
            setQueryArray(valueArray);
          }}
        />
        <Text>Search Value : {searchValue}</Text>

        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          {queryArray.map(value => (
            <Text style={{ margin: 10 }}>{value}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

About.navigationOptions = navigationData => {
  return {
    title: "About"
  };
};

export default About;
