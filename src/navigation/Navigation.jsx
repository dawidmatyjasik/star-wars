import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CharacterDetailedScreen from "../screens/CharacterDetailedScreen";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

const Navigation = ({ data, url, setUrl, filteredData, setFilteredData }) => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root">
        {() => (
          <BottomTabNavigation
            data={data}
            setUrl={setUrl}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="CharacterDetailedScreen">
        {() => <CharacterDetailedScreen url={url} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
