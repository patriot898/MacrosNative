import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import AddRecipeButton from './Buttons/AddRecipeButton.js';

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000000',
    elevation: 2,
    shadowOpacity: 0.4,
  }
})

const TopBar = ({ title }) => {
  return (
    <Header
      centerComponent={{ text: title }}
      backgroundColor='white'
      containerStyle={styles.container}
    />
  )
}

export default TopBar;