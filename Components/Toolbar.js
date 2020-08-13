import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

// import { RecipeModal, ItemModal } from './AdderModals.js';

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flex: 0,
    flexDirection: 'row',
    marginTop: 1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: '#000000',
    elevation: 2,
    shadowOpacity: 0.4,
  },
  selectButton: {

  },
  iconWrapper: {
    flex: 1,
    height: 70,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'rgba(213, 216, 55, .90)',
    // borderTopColor: 'gray',
    // borderTopWidth: 1,


  }
});

export default function Toolbar(props) {
  return (

      <View style={styles.toolbar}>
        <View style={styles.iconWrapper}>
          <Icon name="th-list" type="font-awesome-5" />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="calculator" type="font-awesome-5" />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="apple-alt" type="font-awesome-5" />
        </View>
        {/* <TouchableWithoutFeedback id="calculatorButton" style={styles.selectButton} onPress={props.handleShowCalculator} /> */}
        {/* <TouchableWithoutFeedback id="adderButton" style={styles.selectButton} onPress={props.handleShowAdder}/>
      <TouchableWithoutFeedback id="databaseButton" style={styles.selectButton} onPress={props.handleShowDatabase}/> */}
      </View>

  )
}