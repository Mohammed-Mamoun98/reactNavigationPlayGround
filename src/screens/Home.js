import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions/actions";
const Home = (props) => {
  const [renderTimes, setRenderTimes] = useState(0);

  const dis = useDispatch();
  const handleClick = () => {
    dis(setFilter([{ hello: false }]));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "About",
          });
        }}
      >
        <Text>Home!</Text>
      </TouchableOpacity>
      <Button title="Click Me" onPress={handleClick} />
    </View>
  );
};

Home.navigationOptions = (navigationData) => {
  return {
    title: "Home",
  };
};

export default Home;
