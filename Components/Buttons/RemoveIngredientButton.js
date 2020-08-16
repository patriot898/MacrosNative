import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  removeIngredientButton: {

  },
})

export default function RemoveIngredientButton({ id, onPress }) {
  return (
    (id !== 'entry0') && <Button title={'Remove'} style={styles.removeIngredientButton} id={id} onPress={() => onPress(id)}/>
  )
}
