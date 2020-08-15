import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const styles = StyleSheet.create({
  container: { //div, passes in a 'show' prop for display attr
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 70,
  },
  exerciseWrapper: { //view
    paddingBottom: '5%',
    zIndex: 400,
    flex: 2,
  },
  goalWrapper: { //view
    paddingBottom: '5%',
    zIndex: 300,
    flex: 2,
  },
  inputContainer: { //input
    flex: 1,

  },
  inputLabel: { //label
    // marginRight: '5%',

  },
  calcForm: { //form
    zIndex: 0,
    flex: 1,
    padding: 30,

    marginTop: 10,
    marginBottom: 30,



  },
  dropDown: { //select
    zIndex: 1000,
  },
  dropDownItem: { //select
    zIndex: 1000,
    backgroundColor: '#fff',
  },
  calculateButton: { //button
    borderRadius: 4,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#dddddd'
  },
  calculatedDisplay: { //view, 'show' prop for display
    // width: '60%',
    zIndex: 0,

  },
  calculatedValue: { //h4
    color: 'black'

  },
});

export default class TdeeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      bodyFat: null,
      exerciseLevel: '1.4',
      goal: '1',
      bmr: null,
      tdee: null,
      dcr: null,
      showMacros: false
    }
  }

  calculate(event) {
    event.preventDefault();
    const bmr = parseInt(parseInt(this.state.weight) / 2.2 * (1 - this.state.bodyFat / 100) * 21 + 370); // Katch-Mcardle Equation
    const tdee = parseInt(bmr * parseFloat(this.state.exerciseLevel));
    const dcr = parseInt(tdee * parseFloat(this.state.goal));
    this.setState({
      tdee, bmr, dcr, showMacros: true
    })
    // function below is to update daily caloric requirements for parent app IOT establish meal plan
    // this.props.updateCalories(dcr);
  }

  reset() {

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calcForm}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Weight (lbs)</Text>
            <TextInput
              id="weight"
              style={styles.statInput}
              onChangeText={text => this.setState({
                weight: text
              })} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Body Fat %</Text>
            <TextInput
              id="bodyFat"
              style={styles.statInput}
              onChangeText={text => this.setState({
                bodyfat: text
              })}
            />
          </View>
          <View style={styles.exerciseWrapper}>
            <Text style={styles.inputLabel}>Exercise Level</Text>
            <DropDownPicker
              id="exerciseLevel"
              items={[
                { label: 'Sedentary', value: '1.1' },
                { label: 'Light', value: '1.3' },
                { label: 'Moderate', value: '1.4' },
                { label: 'Heavy', value: '1.5' },
                { label: 'Athletic', value: '1.7' }
              ]}
              defaultValue={this.state.exerciseLevel}
              dropDownStyle={{ backgroundColor: 'red', zIndex: 300 }}
              containerStyle={{ height: 30 }}
              onChangeItem={item => this.setState({
                exerciseLevel: item.value
              })} />
          </View>
          <View style={styles.goalWrapper}>
            <Text style={styles.inputLabel}>Goal</Text>
            <DropDownPicker
              id="goal"
              items={[
                { label: 'Cut', value: '0.8' },
                { label: 'Maintain', value: '1' },
                { label: 'Bulk', value: '1.2' }
              ]}
              defaultValue={this.state.goal}
              dropDownStyle={{ backgroundColor: 'red', zIndex: 300 }}
              containerStyle={{ height: 30 }}
              onChangeItem={item => this.setState({
                goal: item.value
              })} />
          </View>
          <TouchableOpacity style={styles.calculateButton} onPress={this.calculate.bind(this)}>
            <Text>Calculate</Text>
          </TouchableOpacity>
          <View style={styles.calculatedDisplay} show={this.state.showMacros}>
            <Text style={styles.calculatedValue} id="bmr">BMR: {this.state.bmr}</Text>
            <Text style={styles.calculatedValue} id="tdee">TDEE: {this.state.tdee}</Text>
            <Text style={styles.calculatedValue} id="dailyCalories">Daily Caloric Requirement: {this.state.dcr}</Text>
          </View>
        </View>
      </View>
    )
  }
}
