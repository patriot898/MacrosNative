import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TdeeCalculator from './Components/TdeeCalculator.js';
import Toolbar from './Components/Toolbar.js';
import recipes from './Components/recipeDummyData.js';
import FoodDisplay from './Components/FoodDisplay.js';
import TopBar from './Components/TopBar.js';

export default function App() {

  const [selected, setSelected] = useState(2);
  const [showToolbar, setToolbar] = useState(true);
  const [headerTitle, setHeader] = useState('Your Collection');

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <TopBar title={headerTitle}/>
        {(selected === 1) && <TdeeCalculator />}
        {(selected === 2) && <FoodDisplay recipes={recipes} setToolbar={setToolbar} setHeader={setHeader}/>}
      {showToolbar && <Toolbar selected={selected} setSelected={setSelected} setHeader={setHeader}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
