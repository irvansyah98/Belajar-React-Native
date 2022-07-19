import React, { Component } from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity, Switch, TextInput, ScrollView, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      header : 'Home',
      value : true,
      username : ''
     };
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#e53935"/>
        <View style={styles.textheaderContainer}>
          <Text style={styles.textheader}>
            {this.state.header}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            source={require('./src/images/image1.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.switch}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value : !this.state.value})}
          />
        </View>

        <TextInput
          value={this.state.username}
          style={styles.textinput}
          onChangeText={(value) => this.setState({username:value})}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={{color:"#ffffff"}}>Click Me</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button : {
    backgroundColor:'#c62828',
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginHorizontal:20,
    elevation:3,
    borderRadius:50
  },
  textinput : {
    borderBottomWidth:1, 
    marginHorizontal: 20, 
    paddingVertical:10, 
    borderColor:'#c62828'
  },
  switch : {
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  image : {
    width:300,
    height:300
  },
  imageContainer : {
    justifyContent:'center',
    alignItems:'center'
  },
  textheader : {
    color:'#FFFFFF',
    fontWeight:'bold'
  },
  textheaderContainer : {
    backgroundColor:'#c62828',
    paddingVertical:20,
    justifyContent: 'center',
    alignItems:'center',
    elevation:10
  }
})

export default App;