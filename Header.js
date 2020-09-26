/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get("window");
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.props.cambiarTexto}
          placeholder="Ingresa una nueva tarea"
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
    backgroundColor: "#FFFFFF",
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
  input: {
    width: "80%",
    height: 45,
    borderRadius: 5,
    fontSize: 26,
    padding: 10,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 2,
    margin: 10,
    alignSelf: "center",
  },
});

export default Header;
