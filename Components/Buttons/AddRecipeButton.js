import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  addRecipeButton: {

  },
})

export default function AddRecipeButton({ onPress }) {
  return (
    <Icon name="plus-circle" type="font-awesome-5" iconStyle={{color: 'pink'}} onPress={onPress}/>
  )
}
