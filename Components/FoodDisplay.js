import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import FoodCategoryBlock from './FoodCategoryBlock.js';
import AddRecipeButton from './Buttons/AddRecipeButton';
import FoodList from './FoodList.js';
import RecipeAdder from './RecipeAdder.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 70,
  },
});

const FoodDisplay = ({ recipes, setToolbar, setHeader }) => {
  const [showAdder, setAdderDisplay] = useState(false);

  return (
    <>
    {!showAdder && <FoodList recipes={recipes} setAdderDisplay={setAdderDisplay} setToolbar={setToolbar} setHeader={setHeader}/> }
    {showAdder && <RecipeAdder setAdderDisplay={setAdderDisplay} setToolbar={setToolbar} setHeader={setHeader}/>}
    </>
  )
}

export default FoodDisplay;

// <>
//     <View style={styles.topRightButton}>
//       <AddRecipeButton onPress={() => setAdderDisplay(true)}/>
//     </View>
//     <View style={{flex: 1}}>
//     <ScrollView style={styles.container}>
//       <FoodCategoryBlock recipes={recipes} type="main" title="Main Courses" />
//       <FoodCategoryBlock recipes={recipes} type="shake" title="Shakes" />
//       <FoodCategoryBlock recipes={recipes} type="side" title="Sides" />
//       <FoodCategoryBlock recipes={recipes} type="snack" title="Snacks" />
//     </ScrollView>
//     </View>
//     </>