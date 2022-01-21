import { View, Text, FlatList } from "react-native";
import React from "react";
import Character from "../components/Character";

export default function HomeScreen({ data }) {
  return (
    <FlatList
      data={data.results}
      renderItem={({ item }) => (
        <Character
          key={Math.random()}
          name={item.name}
          birth={item.birth_year}
          gender={item.gender}
        />
      )}
    />
  );
}
