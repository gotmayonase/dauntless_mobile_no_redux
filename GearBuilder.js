import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class GearBuilder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      weapons: [],
      armors: []
    }
  }

  componentDidMount() {
    fetch(`http://0.0.0.0:5000/weapons.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          weapons: items
        })
      });
    fetch(`http://0.0.0.0:5000/armors.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          armors: items
        })
      });
  }

  onPickerChange = (key) => value => {
    this.setState({
      [key]: value
    })    
  }

  pickerOptionsForItems(items) {
    return items.map((item) => this.pickerOptionForItem(item));
  }

  pickerOptionForItem(item) {
    return { label: item.name, value: item, key: item.id }
  }

  armorsToOptions() {
    const { armors } = this.state;
    return armors.reduce((acc, armor) => {
      if(acc[armor.type]) {
        acc[armor.type].push(this.pickerOptionForItem(armor))
      } else {
        acc[armor.type] = []
        acc[armor.type].push(this.pickerOptionForItem(armor))
      }
      return acc;
    }, {});
  }

  render() {
    const { weapons } = this.state;
    const pickerWeapons = this.pickerOptionsForItems(weapons);
    const { head, torso, legs, arms } = this.armorsToOptions();
    return <View style={{marginTop: 50, padding: 20}}>
      <RNPickerSelect
        items={pickerWeapons}
        onValueChange={this.onPickerChange('weapon')}
        style={pickerSelectStyles}
      />
      {[head, torso, legs, arms].map((slotArmors, i) => {
        const armorType = (slotArmors && slotArmors.length) ? slotArmors[0].value.type : ''
        return <View key={i}>
          <Text>Select your {armorType}</Text>
          <RNPickerSelect
            items={slotArmors || []}
            onValueChange={this.onPickerChange(armorType)}
            style={pickerSelectStyles}
          />
        </View>
      })}
      
    </View>
  }

}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 10
  },
});