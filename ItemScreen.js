import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default class ItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {
    fetch(`http://0.0.0.0:5000/${this.props.path}.json`)
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          items: items
        })
      });
  }

  renderItem({ item }) {
    return <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.navigation.navigate('Detail', { item: item })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  }

  render() {
    const { items } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});