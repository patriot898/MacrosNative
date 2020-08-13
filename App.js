import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TdeeCalculator from './Components/TdeeCalculator.js';
import Toolbar from './Components/Toolbar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TdeeCalculator />
      <View>
        <Toolbar />
      </View>
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
