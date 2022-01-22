import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        style={tw`ml-2 mb-2`}
        onPress={() => navigation.goBack()}
      />
      <Text style={tw`text-white ml-4`}>
        This is a page made for recruitment process. It is simple encyclopaedia
        appilcation about my favourite fictional world using React-Native. Data
        is searchable and possible to filter. I've used Star Wars API as a
        open-sourced fetch data.
      </Text>
    </View>
  );
};

export default AboutScreen;
