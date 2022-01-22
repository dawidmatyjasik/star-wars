import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CharacterDetailedScreen from "../screens/CharacterDetailedScreen";
import { Entypo } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ data, setUrl }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      >
        {() => <HomeScreen data={data} setUrl={setUrl} />}
      </Tab.Screen>
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="question" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      {/*       <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      >
        {() => <HomeScreen data={data} setUrl={setUrl} />}
      </Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
