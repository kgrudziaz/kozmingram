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
      <View>
        <Image
         style={styles.topBar}
        source={{uri: 'https://iv.pl/images/bfa2a0cdc19cac31d108a26d307ac40d.png'}}
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:50
  },
    topBar:{
    flex: 1,
    width: '100%',
    aspectRatio: 7.33,
    resizeMode: 'contain',
    alignItems:"center",
    justifyContent: "center",
    }
});