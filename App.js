import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TdeeCalculator from './Components/TdeeCalculator.js';
import Toolbar from './Components/Toolbar.js';
import recipes from './Components/recipeDummyData.js';
import FoodDisplay from './Components/FoodDisplay.js';

export default function App() {

  const [selected, setSelected] = useState(2);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {(selected === 1) && <TdeeCalculator />}
      {(selected === 2) && <FoodDisplay recipes={recipes} />}
      <Toolbar selected={selected} setSelected={setSelected}/>
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
