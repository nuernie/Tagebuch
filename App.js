import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class App extends Component{
  state = {item:null};
  render(){
  return (
    <View style={styles.container}>
      <Text>{this.state.item || "Keine Einträge im Tagebuch"}</Text>
      <TextInput
      style = {styles.input}
      placeholder = "Tagebuch Eintrag erstellern!"
      autoCorrect = {false}
      returnKeyType = "done"
      onSubmitEditing = { text => this.setState({item: text.nativeEvent.text})}
      />
    
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height : 40,
  },



});
