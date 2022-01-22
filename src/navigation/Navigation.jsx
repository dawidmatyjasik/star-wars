import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CharacterDetailedScreen from "../screens/CharacterDetailedScreen";

const Stack = createNativeStackNavigator();

const Navigation = ({ data, url, setUrl }) => {
  console.log(data);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home">
        {() => <HomeScreen data={data} setUrl={setUrl} />}
      </Stack.Screen>
      <Stack.Screen name="CharacterDetailedScreen">
        {() => <CharacterDetailedScreen url={url} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
