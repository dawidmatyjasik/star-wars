import { View, Text, FlatList } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const CharacterDetailedScreen = ({
  url = "https://swapi.dev/api/people/1/",
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const response = await fetch(`${url}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={tw`flex flex-grow items-center justify-center`}>
          <Text style={tw`text-white`}>Loading...</Text>
        </View>
      ) : (
        <View style={tw`flex`}>
          <View style={tw`flex flex-row items-center`}>
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="white"
              style={tw`ml-2`}
              onPress={() => navigation.goBack()}
            />
            <View style={tw`mx-auto`}>
              <Text style={tw`mx-auto text-white uppercase font-bold`}>
                {data.name}
              </Text>
            </View>
            <EvilIcons name="user" size={30} color="white" style={tw`mr-2`} />
            <View></View>
          </View>
          <View style={tw`ml-4 mt-4`}>
            <Text style={tw`text-white`}>
              Name:
              <Text style={tw`font-bold uppercase`}> {data.name}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Height:
              <Text style={tw`font-bold uppercase`}> {data.height}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Mass:
              <Text style={tw`font-bold uppercase`}> {data.mass}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Hair color:
              <Text style={tw`font-bold uppercase`}> {data.hair_color}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Skin color:
              <Text style={tw`font-bold uppercase`}> {data.skin_color}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Eye color:
              <Text style={tw`font-bold uppercase`}> {data.eye_color}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Birth year:
              <Text style={tw`font-bold uppercase`}> {data.birth_year}</Text>
            </Text>
            <Text style={tw`text-white`}>
              Gender:
              <Text style={tw`font-bold uppercase`}> {data.gender}</Text>
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default CharacterDetailedScreen;
