/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Text>{item.texto}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#003330",
  },
});

export default Body;
