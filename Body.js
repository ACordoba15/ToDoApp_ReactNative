/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Card } from "react-native-elements";
import Tarea from "./Tarea";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          {this.props.cargando && (
            <ActivityIndicator size="large" color="#640064" />
          )}
          <View style={styles.card}>
            {!this.props.cargando && (
              <ScrollView>
                <Card>
                  <Card.Title style={{ fontSize: 24 }}>ToDo List</Card.Title>
                  <Card.Divider />
                  {!this.props.cargando && (
                    <FlatList
                      data={this.props.tareas}
                      renderItem={({ item }) => (
                        <Tarea item={item} eliminar={this.props.eliminar} />
                      )}
                    />
                  )}
                </Card>
              </ScrollView>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#FFFFFF",
  },
  card: {
    maxHeight: 400,
  },
});

export default Body;
