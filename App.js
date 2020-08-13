import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TdeeCalculator from './Components/TdeeCalculator.js';
import Toolbar from './Components/Toolbar.js';
import recipes from './Components/recipeDummyData.js';
import FoodDisplay from './Components/FoodDisplay.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {true && <TdeeCalculator />}
      {false && <FoodDisplay recipes={recipes} />}
      <Toolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
