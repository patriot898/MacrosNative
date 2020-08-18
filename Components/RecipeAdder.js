import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import RemoveIngredientButton from './Buttons/RemoveIngredientButton.js';
import AddIngredientButton from './Buttons/AddIngredientButton.js';
import EvaluateRecipeButton from './Buttons/EvaluateRecipeButton.js';
import BackButton from './Buttons/BackButton.js';
// import { RecipeModal, ItemModal } from './AdderModals.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 70,

  },
  evaluateRecipeButton: {

  },
  itemEntryInput: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,

  },
  ingredientLineWrapper: {
    marginBottom: 25,
    flex: 0,

  },
  typeDropDown: {

  },
  header: {

  },
  topLeft: {
    flex: 0,
    position: 'absolute',
    top: 45,
    left: 20,
  },
  titleWrapper: {

  },
  titleInput: {
    height: 10,
  }
});

const IngredientLine = ({ id, remove, onChange, value }) => {
  return (
    <View style={styles.ingredientLineWrapper}>
      <TextInput style={styles.itemEntryInput} onChangeText={text => onChange(id, text)} />
      <RemoveIngredientButton id={id} onPress={remove} />
    </View>
  )
}

const RecipeAdderHooked = ({ setAdderDisplay, setToolbar }) => {
  const [ingredients, setIngredients] = useState([{ id: 0, value: '' }]);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState('side');
  const [group, setGroup] = useState('none');
  const [title, setTitle] = useState('');
  const [pair, setPair] = useState('none');
  const [meal, setMeal] = useState('any');
  const [servings, setServings] = useState(1);
  const [defaultServings, setDefaultServings] = useState('1');
  // const [selectedFoodItem, setFood] = useState(itemNutrition.hints[0].food);
  const [addButtonText, setButtonText] = useState('Item');

  // const handleItemChange = (index) => {
  //   setFood(itemNutrition.hints[index].food);
  // }

  const handleIngredientChange = (id, value) => {
    const newIngredients = ingredients;
    const targetIndex = newIngredients.findIndex((ingredient) => {
      return `entry${ingredient.id}` === id;
    })
    newIngredients[targetIndex].value = value;
    setIngredients(newIngredients);
  }

  const addIngredient = () => {
    const newCount = counter + 1;
    const newIngredient = {
      id: newCount,
      value: ''
    }
    const newIngredients = ingredients;
    newIngredients.push(newIngredient);
    setIngredients(newIngredients);
    setButtonText('Recipe');
    setCounter(newCount);
  }

  const removeIngredient = (id) => {
    const newIngredients = ingredients.filter((ingredient) => {
      return `entry${ingredient.id}` !== id;
    });
    let newAddButtonText = 'Recipe';
    if (newIngredients.length === 1) {
      newAddButtonText = 'Item';
    }
    setButtonText(newAddButtonText);
    setIngredients(newIngredients);
  }

  const evaluate = () => {
    console.log(ingredients);

  }

  return (
    <>
      <View style={styles.topLeft}>
        <BackButton onPress={() => {setAdderDisplay(false); setToolbar(true)}} />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Add A Recipe or Item</Text>
        {ingredients.map((ingredient) =>
          <IngredientLine key={ingredient.id} id={`entry${ingredient.id}`} onChange={handleIngredientChange} remove={removeIngredient} />
        )}

        <AddIngredientButton onPress={addIngredient} />
        <View style={styles.titleWrapper}>
          <Text>Recipe/Item Title</Text>
          <TextInput onChangeText={text => setTitle(text)} />
        </View>
        <Text>
          Evaluate {addButtonText}
        </Text>
        <EvaluateRecipeButton onPress={evaluate} />


      {/* <EvaluateRecipeButton onPress={evaluateRecipe}/> */}
      {/* <RecipeModal
      show={this.props.showAddRecipeModal}
      handleHide={this.props.handleHideRecipeModal}
      title={this.state.title}
      handleChange={this.handleChange.bind(this)}
      nutrition={this.props.nutrition}
      onSubmit={this.submitRecipe.bind(this)}
      recipes={this.props.recipes}
      /> */}
      {/* <ItemModal
      show={this.props.showAddItemModal}
      handleHide={this.props.handleHideItemModal}
      title={this.state.title}
      handleChange={this.handleChange.bind(this)}
      handleItemChange={this.handleItemChange.bind(this)}
      itemNutrition={this.props.itemNutrition}
      selectedFoodItem={this.state.selectedFoodItem}
      submitItem={this.submitItem.bind(this)}
      /> */}
    </View>
    </>

  )

}

class RecipeAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [{
        id: 0,
        value: ''
      }],
      counter: 0,
      addButtonText: 'Item',
      showAddRecipeModal: false,
      title: '',
      servings: '',
      type: 'side',
      group: 'none',
      pair: 'none',
      meal: 'any',
      servings: 1,
      defaultServing: '1',
      selectedFoodItem: this.props.itemNutrition.hints[0].food
    }
    this.baseState = this.state;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleItemChange(event) {
    this.setState({
      [event.target.id]: this.props.itemNutrition.hints[parseInt(event.target.value)].food
    });
  }

  onIngredientChange(event) {
    const ingredients = this.state.ingredients;
    const targetIndex = ingredients.findIndex((ingredient) => {
      return `entry${ingredient.id}` === event.target.id;
    })
    ingredients[targetIndex].value = event.target.value;
    this.setState({ ingredients });
  }

  addIngredient() {
    const counter = this.state.counter + 1;
    const newIngredient = {
      id: counter,
      value: ''
    }
    const ingredients = this.state.ingredients;
    ingredients.push(newIngredient);
    this.setState({
      counter,
      ingredients,
      addButtonText: 'Recipe'
    });
  }

  removeIngredient(event) {
    const ingredients = this.state.ingredients.filter((ingredient) => {
      return `entry${ingredient.id}` !== event.target.id;
    });
    let addButtonText = 'Recipe';
    if (ingredients.length === 1) {
      addButtonText = 'Item';
    }
    this.setState({ ingredients, addButtonText });
  }

  evaluateRecipe() {
    const ingredients = [];
    this.state.ingredients.forEach(ingredient => {
      // all validation for ingredients can go here
      if (ingredient.value !== '') {
        ingredients.push(ingredient.value);
      }
    });
    const recipe = {};
    recipe.ingr = ingredients;
    recipe.title = this.state.title;
    this.props.evaluate(recipe);
  }

  submitItem() {
    const item = {};
    item.name = this.state.title;
    item.macros = {};
    item.macros.calories = parseInt(this.state.selectedFoodItem.nutrients.ENERC_KCAL);
    item.macros.carbs = parseInt(this.state.selectedFoodItem.nutrients.CHOCDF);
    item.macros.protein = parseInt(this.state.selectedFoodItem.nutrients.PROCNT);
    item.macros.fat = parseInt(this.state.selectedFoodItem.nutrients.FAT);
    item.group = this.state.group;
    item.servings = parseInt(this.state.servings);
    item.defaultServing = parseInt(this.state.defaultServing);
    item.meal = this.state.meal;
    item.type = this.state.type;
    console.log(item);
    this.props.handleHideItemModal();
    this.props.addRecipe(item);
  }

  submitRecipe() {
    const recipe = {};
    recipe.name = this.state.title;
    recipe.macros = {};
    recipe.macros.calories = this.props.nutrition.calories;
    recipe.macros.carbs = parseInt(this.props.nutrition.totalNutrients.CHOCDF.quantity);
    recipe.macros.protein = parseInt(this.props.nutrition.totalNutrients.PROCNT.quantity)
    recipe.macros.fat = parseInt(this.props.nutrition.totalNutrients.FAT.quantity);
    recipe.group = this.state.group;
    recipe.servings = parseInt(this.state.servings);
    recipe.defaultServing = parseInt(this.state.defaultServing);
    recipe.meal = this.state.meal
    recipe.pairing = {
      pair: this.state.pair,
      mandatory: false
    }
    recipe.type = this.state.type;
    console.log(recipe);
    this.props.handleHideRecipeModal();
    this.props.addRecipe(recipe);

  }

  render() {
    return (
      <Wrapper show={this.props.show}>
        <Header>Add A Recipe or Item</Header>
        {this.state.ingredients.map((ingredient) =>
          <IngredientLine id={`entry${ingredient.id}`} value={ingredient.value} change={this.onIngredientChange.bind(this)} remove={this.removeIngredient.bind(this)} />
        )}
        <div>
          <AddIngredientButton onClick={this.addIngredient.bind(this)}>Add Ingredient</AddIngredientButton>

        </div>
        <br></br>
        <TitleDiv>
          <label>Recipe/Item Title</label>
          <br></br>
          <TitleInput id="title" onChange={this.handleChange.bind(this)} />
        </TitleDiv>
        <EvaluateRecipeButton varient="success" className="btn-success" onClick={this.evaluateRecipe.bind(this)}>Evaluate {this.state.addButtonText}</EvaluateRecipeButton>
        <RecipeModal
          show={this.props.showAddRecipeModal}
          handleHide={this.props.handleHideRecipeModal}
          title={this.state.title}
          handleChange={this.handleChange.bind(this)}
          nutrition={this.props.nutrition}
          onSubmit={this.submitRecipe.bind(this)}
          recipes={this.props.recipes}
        />
        <ItemModal
          show={this.props.showAddItemModal}
          handleHide={this.props.handleHideItemModal}
          title={this.state.title}
          handleChange={this.handleChange.bind(this)}
          handleItemChange={this.handleItemChange.bind(this)}
          itemNutrition={this.props.itemNutrition}
          selectedFoodItem={this.state.selectedFoodItem}
          submitItem={this.submitItem.bind(this)}
        />
      </Wrapper>
    )
  }
}

export default RecipeAdderHooked;