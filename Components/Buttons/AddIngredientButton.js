import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  addIngredientButton: {
    marginTop: 4,

  },
})

export default function AddIngredientButton({ id, onPress }) {
  return (
    <Button title={'Add'} style={styles.addIngredientButton} id={id} onPress={() => onPress(id)}/>
  )
}
