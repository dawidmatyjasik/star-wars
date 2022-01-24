import { View, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import tw from "twrnc";
import { Picker } from "@react-native-picker/picker";

export default function HomeScreen({
  data,
  setUrl,
  filteredData,
  setFilteredData,
}) {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("default");

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
  };

  const handleSelect = (itemValue) => {
    setSelected(itemValue);
    if (itemValue === "default") return;
    else if (itemValue === "az") {
      data.results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (itemValue === "za") {
      data.results.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  return (
    <View style={tw`pb-[50px] px-2`}>
      <View style={tw`flex flex-row mb-4`}>
        <TextInput
          style={tw`border border-[#797979] rounded border-solid text-white flex-grow pl-2`}
          placeholder="Search..."
          placeholderTextColor="white"
          onChangeText={(text) => handleSearch(text)}
        />

        <Picker
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => handleSelect(itemValue)}
          style={tw`w-2/5 text-white border border-[#797979] rounded border-solid`}
          dropdownIconColor={"white"}
        >
          <Picker.Item label="Default" value="default" enabled={false} />
          <Picker.Item label="A-Z" value="az" />
          <Picker.Item label="Z-A" value="za" />
        </Picker>
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
