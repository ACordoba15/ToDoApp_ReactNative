import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      tareas : [],
      texto : '' 
    };
  }

  establecerTexto = (value) => {
    console.log(value)
    //this.setState({texto: value});
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Header cambiarTexto = {this.establecerTexto}/>
        
        <Body/>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
