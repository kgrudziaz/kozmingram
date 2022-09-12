import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, ScrollView} from "react-native";
import { useQuery } from "react-query";

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");

  return response.json();
}

export default function Photos({ navigation }) {
  const {
    data: photos,
    isError,
    isLoading,
  } = useQuery("getPhotos", getPhotos, {
    placeholderData: [],
  });

  return (
      <View style={styles.container}>
        <Image
        style={styles.topBar}
        source={{uri: 'https://i.ibb.co/3hnPxfk/bar-top2.png'}}
        />
        <View>
        {isError && <Text>Error</Text>}
        {isLoading && <Text>Loading...</Text>}
          <FlatList
            data={photos}
            renderItem = {({ item }) => {
              return (
                <View >
                  <Image style={{height: 44, width: 360, marginTop:10}} source={{uri: 'https://i.ibb.co/tHFNKqw/account-bar.png'}} />
                  <Image style={{height: 360, width: 360}} source={{uri: item.url }} />
                  <Image style={{height:120, width: 360, marginBottom: 20}} source={{uri: 'https://i.ibb.co/Zf764T1/comment-bar.png'}}/>
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
  backgroundColor: "#fff"
  },
topBar:{
  backgroundColor: "#fff",
  width: "100%",
  aspectRatio: 6.81,
  }
});