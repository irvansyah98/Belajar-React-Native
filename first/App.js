import React, { Component } from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      header : 'Home'
     };
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#e53935"/>
        <View style={{
          backgroundColor:'#c62828',
          paddingVertical:20,
          justifyContent: 'center',
          alignItems:'center',
          elevation:10
        }}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>
            {this.state.header}
          </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image 
            source={require('./src/images/image1.jpg')}
            style={{width:300,height:300}}
          />
        </View>

        <TouchableOpacity style={{
          backgroundColor:'#c62828',
          paddingVertical:20,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          marginHorizontal:20,
          elevation:3,
          borderRadius:50
        }}>
          <Text style={{color:"#ffffff"}}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;