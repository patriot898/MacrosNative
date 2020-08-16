import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  evaluateRecipeButton: {
    margin: 'auto',

  },
})

export default function evaluateRecipeButton({ onPress }) {
  return (
    <Button title={'Evaluate'} style={styles.evaluateRecipeButton} onPress={onPress}/>
  )
}
