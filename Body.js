/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Tarea from "./Tarea";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.cargando && (
          <ActivityIndicator size="large" color="#640064" />
        )}

        {!this.props.cargando && (
          <FlatList
            data={this.props.tareas}
            renderItem={({ item }) => (
              <Tarea item={item} eliminar={this.props.eliminar} />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#98FB98",
  },
});

export default Body;
