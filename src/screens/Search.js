import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, ScrollView} from "react-native";
import { useQuery } from "react-query";

async function getSearch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");

  return response.json();
}

export default function Search({ navigation }) {
  const {
    data: search,
    isError,
    isLoading,
  } = useQuery("getSearch", getSearch, {
    placeholderData: [],
  });

  return (
      <View style={styles.container}>
        <Image
         style={styles.topBar}
         source={{uri: 'https://i.ibb.co/Q9XchqM/search-bar.png'}}
        />
        <View style>
        {isError && <Text>Error</Text>}
        {isLoading && <Text>Loading...</Text>}
          <FlatList
            numColumns={3}
            data={search}
            renderItem = {({ item }) => {
              return (
                <View >
                  <Image style={{height: 120, width: 120}} source={{uri: item.url }} />
                </View>
              )
            } }
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%", 
    alignItems: "center", 
    marginTop: 50, 
    backgroundColor: "#fff",
  },
    topBar:{
    width: '100%',
    aspectRatio: 7.33,
    }
});