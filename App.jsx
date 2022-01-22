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
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const json = await response.json();
      setData(json);
      setFilteredData(json);
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
      <NavigationContainer
        theme={{
          colors: {
            background: "#121212",
          },
        }}
      >
        <SafeAreaView style={tw`flex flex-1 bg-[#121212]`}>
          {isLoading ? (
            <View style={tw`flex flex-grow items-center justify-center`}>
              <Text style={tw`text-white`}>Loading...</Text>
            </View>
          ) : (
            <>
              <Navigation
                data={data}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
                setUrl={setUrl}
                url={url}
              />
              <StatusBar style="auto" />
            </>
          )}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
