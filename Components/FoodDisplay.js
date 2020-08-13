import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';


const checkRecipe = (recipe, idx, type) => {
  if (recipe.type === type) {
    return (<View key={idx}><Text style ={styles.recipeName}>{recipe.name}</Text></View>);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 70,


  },
  recipe: {

  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  displayBlock: {
    marginBottom: 10,

  },
  recipeName: {

  },
  header: {

  }

});


// const Wrapper = styled.div `
//   background: #fff;
//   border-radius: 4px;
//   box-shadow: 0 0 18px rgba(0, 0, 0, .15);
//   width: fit-content;
//   border: 1px solid #ccc;
//   padding: 1em;
//   margin-left: 3em;
//   display: ${ (props) => props.show ? 'inline-block' : 'none'} ;
// `;


// const DisplayBlock = styled.div`
//   display: inline-block;
//   padding: 1.5em;
//   vertical-align: top;
// `



const FoodDisplay = ({ recipes, show }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container} show={show}>
        <View style={styles.displayBlock}>
          <Text style={styles.sectionTitle} id="mains">Main Courses</Text>
          {recipes.map((recipe, idx) => checkRecipe(recipe, idx, 'main'))}
        </View>
        <View style={styles.displayBlock}>
          <Text style={styles.sectionTitle} id="shakes">Shakes</Text>
          {recipes.map((recipe, idx) => checkRecipe(recipe, idx, 'shake'))}
        </View>
        <View style={styles.displayBlock}>
          <Text style={styles.sectionTitle} id="sides">Sides</Text>
          {recipes.map((recipe, idx) => checkRecipe(recipe, idx, 'side'))}
        </View>
        <View style={styles.displayBlock}>
          <Text style={styles.sectionTitle} id="snacks">Snacks</Text>
          {recipes.map((recipe, idx) => checkRecipe(recipe, idx, 'snack'))}
        </View>
      </View>
    </ScrollView>
  )
}

export default FoodDisplay;