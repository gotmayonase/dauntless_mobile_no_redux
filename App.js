import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ArmorScreen from './ArmorScreen'
import ArmorDetail from './ArmorDetail'
import WeaponScreen from './WeaponScreen';
import WeaponDetail from './WeaponDetail';
import GearBuilder from './GearBuilder';

const ArmorStack = createStackNavigator({
  List: {
    screen: ArmorScreen
  },
  Detail: {
    screen: ArmorDetail
  }
})

const WeaponStack = createStackNavigator({
  List: {
    screen: WeaponScreen
  },
  Detail: {
    screen: WeaponDetail
  }
})

const Tabs = createBottomTabNavigator({
  GearBuilder: GearBuilder,
  Armors: ArmorStack,
  Weapons: WeaponStack,
})
export default class App extends React.Component {

  render() {
    return <Tabs />
  }
}
