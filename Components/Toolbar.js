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
  selected: {

  },
  unselected: {
    color: 'pink',

  },
  iconWrapper: {
    flex: 1,
    height: 70,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    // borderTopColor: 'gray',
    // borderTopWidth: 1,
  }
});

export default function Toolbar({ selected, setSelected }) {
  return (
      <View style={styles.toolbar}>
        <View style={styles.iconWrapper}>
          <Icon iconStyle={selected === 0 ? styles.selected : styles.unselected} name="th-list" type="font-awesome-5" onPress={() => setSelected(0)} />
        </View>
        <View style={styles.iconWrapper}>
          <Icon iconStyle={selected === 1 ? styles.selected : styles.unselected} name="calculator" type="font-awesome-5" onPress={() => setSelected(1)}/>
        </View>
        <View style={styles.iconWrapper}>
          <Icon iconStyle={selected === 2 ? styles.selected : styles.unselected} name="apple-alt" type="font-awesome-5" onPress={() => setSelected(2)}/>
        </View>
      </View>

  )
}