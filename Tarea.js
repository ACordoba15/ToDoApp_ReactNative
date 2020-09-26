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
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.eliminar(this.props.item.key);
          }}
        >
          <Ionicons
            style={styles.icono}
            name="md-trash"
            size={24}
            color="gray"
          />
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
    fontSize: 24,
  },
  icono: {
    color: "#fffffff",
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "90%",
    minHeight: 45,
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#000000",
  },
});

export default Tarea;
