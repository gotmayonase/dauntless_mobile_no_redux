import React from 'react';
import { View, Text } from 'react-native';

export default class ArmorDetail extends React.Component {

  static navigationOptions = {
    title: 'Armor Detail'
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return <View>
      <Text>Name:</Text>
      <Text>{item.name}</Text>

      <Text>Base Armor:</Text>
      <Text>{item.base_armor}</Text>
    </View>
  }
}