import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
            style={styles.texto}
            onChangeText = {this.props.cambiarTexto}
            placeholder = "Aquí escribe tu texto..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 2,
        justifyContent: 'center',
        backgroundColor: '#00FF00',
    },
    texto : {
        paddingHorizontal : 16
    }
});

export default Header;
