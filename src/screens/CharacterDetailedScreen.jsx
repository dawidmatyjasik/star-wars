import { View, Text } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";
import tw from "twrnc";

const CharacterDetailedScreen = ({ data }) => {
  console.log(data[0].name);

  return (
    <View style={tw`flex flex-row items-center`}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        style={tw`ml-2`}
      />
      <View style={tw`mx-auto`}>
        <Text style={tw`mx-auto text-white uppercase font-bold`}>
          {data[0].name}
        </Text>
      </View>
      <EvilIcons name="user" size={30} color="white" style={tw`mr-2`} />
    </View>
  );
};

export default CharacterDetailedScreen;
