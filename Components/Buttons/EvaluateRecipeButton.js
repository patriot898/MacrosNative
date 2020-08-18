import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
    backgroundColor: 'pink'


  },
  button: {
    height: 50,
    backgroundColor: 'pink',
    width: '100%',
  },
  title: {
    position: 'absolute',
    top: 15,
  }
})

export default function evaluateRecipeButton({ onPress }) {
  return (
    <Button title={'Evaluate'} containerStyle={styles.container} buttonStyle={styles.button} titleStyle={styles.title} onPress={onPress}/>
  )
}
