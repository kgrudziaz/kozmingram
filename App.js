import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, ScrollView} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";

import HomeNavigator from "./src/navigation/TabNavigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
            <StatusBar style="auto" />
          <HomeNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    height: "100%",
  },
});
