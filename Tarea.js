/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Ionicons style={styles.icono} name="ios-arrow-forward" size={20} />
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.eliminar(this.props.item.key);
          }}
        >
          <Ionicons style={styles.icono} name="md-trash" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  texto: {
    fontSize: 20,
    flex: 8,
  },
  icono: {
    color: "#000000",
    flex: 1,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    minHeight: 45,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 5,
  },
});

export default Tarea;
