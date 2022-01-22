import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import tw from "twrnc";
import RNPickerSelect from "react-native-picker-select";

export default function HomeScreen({
  data,
  setUrl,
  filteredData,
  setFilteredData,
}) {
  const [text, setText] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    if (text) {
      const newData = data.results.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setText(text);
    } else {
      setFilteredData(data);
      setText(text);
    }
    console.log(filteredData);
  };
  console.log(filteredData);

  return (
    <View>
      <View style={tw`flex flex-row mb-4`}>
        <TextInput
          style={tw`border border-[#797979] rounded border-solid text-white flex-grow`}
          placeholder="Search..."
          placeholderTextColor="white"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        data={text == 0 ? filteredData.results : filteredData}
        renderItem={({ item }) => (
          <Character
            name={item.name}
            birth={item.birth_year}
            gender={item.gender}
            setUrl={setUrl}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
