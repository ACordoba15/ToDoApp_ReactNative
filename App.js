/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { AsyncStorage, Button, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Body from "./Body";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: "",
    };
  }

  // Se ejecuta una sola vez, luego de que se ejecuta una vez el render.
  componentDidMount() {
    this.cargarDatos();
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  };

  agregarTarea = () => {
    const nuevasTarea = [
      ...this.state.tareas,
      { texto: this.state.texto, key: Date.now().toString() },
    ];
    this.guardarDatos(nuevasTarea);
    this.setState({
      tareas: nuevasTarea,
      texto: "",
    });

    console.log(this.state.tareas.length);
  };

  eliminarTarea = (id) => {
    const nuevasTarea = this.state.tareas.filter((tarea) => tarea.key !== id);
    this.guardarDatos(nuevasTarea);
    this.setState({
      tareas: nuevasTarea,
    });
  };

  guardarDatos = (tareas) => {
    //Set - key:string,valor
    AsyncStorage.setItem("@ToDoApp:tareas", JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  cargarDatos = () => {
    //get - key:string
    AsyncStorage.getItem("@ToDoApp:tareas")
      .then((valor) => {
        console.log(valor);
        console.log(JSON.parse(valor));
        if (valor !== null) {
          const nuevasTarea = JSON.parse(valor);
          this.setState({ tareas: nuevasTarea });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={this.state.texto}
          onSubmitEditing={this.props.agregar}
        />
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
