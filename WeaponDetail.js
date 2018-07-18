import React from 'react';
import { View, Text } from 'react-native';

export default class WeaponDetail extends React.Component {

  static navigationOptions = {
    title: 'Weapon Detail'
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return <View>
      <Text>Name:</Text>
      <Text>{item.name}</Text>

      <Text>Base Power:</Text>
      <Text>{item.base_power}</Text>
    </View>
  }
}