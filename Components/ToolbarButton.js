import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
// import { RecipeModal, ItemModal } from './AdderModals.js';

const styles = StyleSheet.create({
  button: {

  },
  selected: {

  },
  unselected: {

  }
});

export default function ToolbarButton ({selected, onPress}) {


 return (
      <TouchableWithoutFeedback style={styles.button, selected ? styles.selected : styles.unselected} onPress={onPress} />
 )
}