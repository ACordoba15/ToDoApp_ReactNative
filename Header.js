/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Aquí escribe tu texto..."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#00FF00",
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});

export default Header;
