import { View, Text, FlatList } from "react-native";
import React from "react";
import Character from "../components/Character";

export default function HomeScreen({ data, setUrl }) {
  return (
    <FlatList
      data={data.results}
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
  );
}
