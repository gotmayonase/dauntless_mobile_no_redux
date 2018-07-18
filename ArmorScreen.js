import React from 'react';
import ItemScreen from './ItemScreen'

export default class ArmorScreen extends React.Component {
  render() {
    return <ItemScreen path="armors" navigation={this.props.navigation} />
  }
}