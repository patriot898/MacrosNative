import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const checkRecipe = (recipe, idx, type) => {
  if (recipe.type === type) {
    return (<View key={idx}><Text style={styles.recipeName}>{recipe.name}</Text></View>);
  }
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  displayBlock: {
    marginBottom: 10,

  },
  recipeName: {

  }
});


const FoodCategoryBlock = ({ recipes, type, title }) => {
  return (
    <View style={styles.displayBlock}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {recipes.map((recipe, idx) => checkRecipe(recipe, idx, type))}
    </View>
  )
}

export default FoodCategoryBlock;