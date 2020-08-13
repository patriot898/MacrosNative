import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const checkRecipe = (recipe, type) => {
  if (recipe.type === type) {
    return (<View><Text style={styles.recipeName}>{recipe.name}</Text></View>);
  }
};

const styles = StyleSheet.create({
  container: {

  },
  recipe: {

  },
  header: {

  },
  displayBlock: {

  },
  recipeName: {

  },
  header: {

  }

});


const Wrapper = styled.div `
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 18px rgba(0, 0, 0, .15);
  width: fit-content;
  border: 1px solid #ccc;
  padding: 1em;
  margin-left: 3em;
  display: ${ (props) => props.show ? 'inline-block' : 'none'} ;
`;


const DisplayBlock = styled.div`
  display: inline-block;
  padding: 1.5em;
  vertical-align: top;
`



const FoodDisplay = ( {recipes, show} ) => {
  return (
    <View style={styles.container} show={show}>
      <View style={styles.displayBlock}>
        <Header style={styles.header} id="mains">Main Courses</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'main'))}
      </View>
      <View style={styles.displayBlock}>
        <Header style={styles.header} id="shakes">Shakes</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'shake'))}
      </View>
      <View style={styles.displayBlock}>
        <Header style={styles.header} id="sides">Sides</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'side'))}
      </View>
      <View style={styles.displayBlock}>
        <Header style={styles.header} id="snacks">Snacks</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'snack'))}
      </View>
    </View>
  )
}

export default FoodDisplay;