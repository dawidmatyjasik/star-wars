import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import PokeItem from "./src/components/Character";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(data.results);

  return (
    <SafeAreaView style={tw`flex flex-1 bg-[#121212]`}>
      <HomeScreen data={data} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
