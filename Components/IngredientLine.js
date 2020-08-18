import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import RemoveIngredientButton from './Buttons/RemoveIngredientButton.js';

const styles = StyleSheet.create({
  ingredientInputContainer: {
    marginBottom: 0,
    padding: 0,
    flex: 8,
  },
  ingredientLineContainer: {
    flex: 0,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 3,
  },
  input: {
    paddingLeft: 10,
    height: 40,
    fontSize: 20,
  },
});

export default function IngredientLine({ id, remove, onChange, value }) {
  return (
    <View style={styles.ingredientLineContainer}>
      <View style={styles.ingredientInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChange(id, text)}
          placeholder={'Enter Ingredient'}
        />
      </View>
      <View style={styles.iconContainer}>
        <RemoveIngredientButton id={id} onPress={remove} />
      </View>
    </View>
  )
}