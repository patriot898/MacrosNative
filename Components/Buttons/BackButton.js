import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  backButton: {

  },
})

export default function BackButton({ onPress }) {
  return (
    <Button title={'Back'} style={styles.backButton} onPress={onPress}/>
  )
}
