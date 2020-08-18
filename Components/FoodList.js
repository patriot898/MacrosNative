import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import FoodCategoryBlock from './FoodCategoryBlock.js';
import AddRecipeButton from './Buttons/AddRecipeButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 70,
  },
  topRight: {
    flex: 0,
    position: 'absolute',
    top: 60,
    right: 30,
  },
});



export default function FoodList({ recipes, setAdderDisplay, setToolbar }) {
  return (
    <>
    <View style={styles.topRight}>
      <AddRecipeButton onPress={() => {setAdderDisplay(true); setToolbar(false)}}/>
    </View>
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <FoodCategoryBlock recipes={recipes} type="main" title="Main Courses" />
      <FoodCategoryBlock recipes={recipes} type="shake" title="Shakes" />
      <FoodCategoryBlock recipes={recipes} type="side" title="Sides" />
      <FoodCategoryBlock recipes={recipes} type="snack" title="Snacks" />
    </ScrollView>
    </View>
    </>
  )
}
