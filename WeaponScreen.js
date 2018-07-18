import React from 'react';
import ItemScreen from './ItemScreen'

export default class WeaponScreen extends React.Component {

  render() {
    return <ItemScreen path="weapons" navigation={this.props.navigation} />
  }
}