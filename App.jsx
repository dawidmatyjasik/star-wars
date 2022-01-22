import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import PokeItem from "./src/components/Character";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";
import CharacterDetailedScreen from "./src/screens/CharacterDetailedScreen";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://swapi.dev/api/people/1/");
  const [data, setData] = useState([]);

  const getData = async () => {
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
    getData();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`flex flex-1 bg-[#121212]`}>
        {/* <HomeScreen data={data} setUrl={setUrl} /> */}
        <CharacterDetailedScreen url={url} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}
